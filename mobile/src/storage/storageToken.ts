import AsyncStorage from "@react-native-async-storage/async-storage";

import { TOKEN_STORAGE } from "./storageConfig";

export async function storageSaveToken(token: string) {
    await AsyncStorage.setItem(TOKEN_STORAGE, token)
}

export async function storageTokenGet(){
    const token = await AsyncStorage.getItem(TOKEN_STORAGE);
    return token;
}

export async function storageTokenRemove(){
    await AsyncStorage.removeItem(TOKEN_STORAGE)
}