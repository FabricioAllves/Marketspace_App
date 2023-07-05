import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { useForm, Controller } from 'react-hook-form'
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import LogoImg from '@assets/LogoMarketplaceSignUp.png'
import AvatarImg from '@assets/Avatar.png'

import { Button } from '@components/Button';
import { AppError } from '@utils/AppError';
import { Input } from '@components/Input';

import { api } from '@services/api';
import { useAuth } from '@hooks/useAuth';

import {
  Container,
  ContainerLogin,
  Logo,
  LogoText,
  SubText,
  Form,
  TitleForm,
  PhotoUser,
  PhotoProfile,
  ContainerCreateLogin,
  WrapperEdit,
  EditIcon,
  ContainerPhoto,
  ContainerButton
} from './styles';

type FormDataProps = {
  name: string;
  email: string;
  tel: string;
  password: string;
  password_confirm: string
}

export function SignUp() {
  const [viewPhotoSelected, setViewPhotoSelected] = useState()

  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormDataProps>()

  const navigation = useNavigation();
  const { signIn, user, photo, setPhoto } = useAuth()

  function handleGoBack() {
    navigation.goBack()
  }


  async function handleSelectedPhotoUser() {
    try {
      let photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // tipo de midia
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true //usuario pode editar a imagem?

      });

      if (photoSelected.canceled) {
        return
      }
      // Existe uma URI?
      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);

        if (photoInfo.exists && (photoInfo.size / 1024 / 1024 > 5)) {
          // Se for maior que 5MB vai cair aqui
          return Alert.alert("Essa imagem e muito grande. Escolha uma de ate 5MB")
        }
        //Retornando a extensao da image
        const fileExtension = photoSelected.assets[0].uri.split('.').pop();

        const photoFile = {
          name: `${user.name}.${fileExtension}`.toLowerCase(),
          uri: photoSelected.assets[0].uri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`
        } as any;

        setPhoto(photoFile)
        setViewPhotoSelected(photoFile.uri)

      }
    } catch (error) {
      console.log(error)
    }
  }

  async function createUser({ name, email, tel, password }: FormDataProps) {
    const userPhotoUploadFormm = new FormData();

    if (photo) {
      userPhotoUploadFormm.append('avatar', photo);
    }
    userPhotoUploadFormm.append('name', name);
    userPhotoUploadFormm.append('email', email);
    userPhotoUploadFormm.append('tel', tel);
    userPhotoUploadFormm.append('password', password);

    try {
      await api.post('/users', userPhotoUploadFormm, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      await signIn(email, password)

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possivel criar a conta. Tente novamente mais tarde.'
      console.log(title)
    }
  }

  return (
    <Container>
      <ContainerLogin>
        <Logo
          source={LogoImg}
        />

        <LogoText>
          Boas vindas!
        </LogoText>

        <SubText>
          Crie sua conta e use o espaço para comprar
          itens variados e vender seus produtos
        </SubText>

        <ContainerPhoto>
          <PhotoUser>
            {
              viewPhotoSelected ?
                (
                  <PhotoProfile
                    source={{ uri: viewPhotoSelected }}
                  />
                )
                :
                (
                  <PhotoProfile
                    source={AvatarImg}
                  />
                )
            }
          </PhotoUser>

          <WrapperEdit
            activeOpacity={0.5}
            onPress={handleSelectedPhotoUser}
          >
            <EditIcon
              name={'edit-3'}
            />
          </WrapperEdit>
        </ContainerPhoto>

        <Form>
          <Controller
            control={control}
            name='name'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Nome'
                secureTextEntry={false}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='E-mail'
                secureTextEntry={false}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='tel'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Telefone'
                keyboardType='phone-pad'
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Senha'
                password
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='password_confirm'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Confirmar senha'
                password
                onChangeText={onChange}
                value={value}
                onSubmitEditing={() => { }}
                returnKeyType='send'
              />
            )}
          />
        </Form>

        <ContainerButton>
          <Button
            text='Criar'
            type={'BLACK'}
            onPress={handleSubmit(createUser)}
          />
        </ContainerButton>
      </ContainerLogin>

      <ContainerCreateLogin>
        <TitleForm>
          Já tem uma conta?
        </TitleForm>

        <ContainerButton>
          <Button
            text='Ir para login'
            type={'GRAY'}
            onPress={handleGoBack}
          />
        </ContainerButton>
      </ContainerCreateLogin>
    </Container>
  );
}

