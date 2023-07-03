import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '@services/api';
import { UserDTO } from '@dtos/UserDTO';

import { storageSaveToken, storageTokenGet, storageTokenRemove } from '@storage/storageToken';
import { storageSaveUser, storageUserGet, storageUserRemove } from '@storage/storageUser';


export type AuthContextDataProps = {
  user: {
    id: string,
    name: string,
    email: string,
    tel: string,
    avatar: string,
  };
  signIn: (email: string, password: string) => Promise<void>;
  payment_methods: string[];
  setPayment_methods: (price: string[]) => void;
  photo: File | undefined;
  setPhoto: (obj: File | undefined) => void;
  signOut: () => void;
  isLoadingStorageData: boolean;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [payment_methods, setPayment_methods] = useState<string[]>([]);
  const [photo, setPhoto] = useState<File | undefined>();
  const [isLoadingStorageData, setIsLoadingStorageData] = useState(true);

  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    setUser(userData)
  }

  async function storageUserAndTokenSave(userData: UserDTO, token: string) {
    try {
      setIsLoadingStorageData(true)

      await storageSaveUser(userData)
      await storageSaveToken(token)

    } catch (error) {
      throw error;

    } finally {
      setIsLoadingStorageData(false)
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', { email, password });

      if (data.user && data.token) {
        await storageUserAndTokenSave(data.user, data.token)
        userAndTokenUpdate(data.user, data.token)
      }

    } catch (error) {
      throw error

    } finally {
      setIsLoadingStorageData(false)
    }
  }

  async function signOut() {
    try {
      setIsLoadingStorageData(true)

      setUser({} as UserDTO)
      await storageUserRemove()
      await storageTokenRemove()

    } catch (error) {
      throw error
    } finally {
      setIsLoadingStorageData(false)
    }
  }

  async function loadData() {
    try {
      setIsLoadingStorageData(true)

      const userLogged = await storageUserGet();
      const token = await storageTokenGet();

      if (userLogged && token) {
        userAndTokenUpdate(userLogged, token)
      }

    } catch (error) {
      throw error;

    } finally {
      setIsLoadingStorageData(false)
    }
  }

  useEffect(() => {
    //signOut()
    loadData()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut,
      payment_methods,
      setPayment_methods,
      photo,
      setPhoto,
      isLoadingStorageData
    }}>
      {children}
    </AuthContext.Provider>
  )
}