import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'

import LogoImg from '@assets/LogoMarketplaceLogin.png'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useAuth } from '@hooks/useAuth';
import { AppError } from '@utils/AppError';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import {
  Container,
  ContainerLogin,
  Logo,
  LogoText,
  SubText,
  Form,
  TitleForm,
  ContainerCreateLogin,
  ContainerButton
} from './styles';
import { Loading } from '@components/Loading';

type FormData = {
  email: string;
  password: string;
}


export function SignIn() {

  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { signIn, isLoadingStorageData } = useAuth();


  async function handleLogin({ email, password }: FormData) {
    try {
      await signIn(email, password)

    } catch (error) {

      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possivel entrar. Tente novamente mais tarde.'
      console.log(title)
    }
  }

  function handleNewAccount() {
    navigation.navigate('signUp')
    reset()

  }

  // useEffect(() => {
  //   return () => {
  //     reset();
  //   };
  // }, [reset]);

  return (
    <Container>
      <ContainerLogin >

        <Logo
          source={LogoImg}
          defaultSource={LogoImg}
          resizeMode="contain"
        />

        <LogoText>
          marketspace
        </LogoText>

        <SubText>
          Seu espaço de compra e venda
        </SubText>

        <TitleForm>
          Acesse sua conta
        </TitleForm>

        <Form>
          <Controller
            control={control}
            name='email'
            rules={{ required: 'Informe o e-mail' }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                secureTextEntry={false}
                value={value}
                onChangeText={onChange}
              //errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            rules={{ required: 'Informe a senha' }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                password={true}
                value={value}
                onChangeText={onChange}
              //errorMessage={errors.password?.message}
              />
            )}
          />

        </Form>
        <ContainerButton>
          <Button
            text='Entrar'
            type={'BLUE'}
            onPress={handleSubmit(handleLogin)}
          />
        </ContainerButton>

      </ContainerLogin>

      <ContainerCreateLogin>
        <TitleForm>
          Ainda não tem acesso?
        </TitleForm>

        <ContainerButton>
          {
            isLoadingStorageData ?
              (<Loading />) :
              (
                <Button
                  type={'GRAY'}
                  onPress={handleNewAccount}
                  text='Criar uma conta'
                />
              )
          }
        </ContainerButton>
      </ContainerCreateLogin>
    </Container>
  );
}
