import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '@hooks/useAuth';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { Button } from '@components/Button';

import {
  Container,
  Wrapper,
  Title,
  ContainerButtons
} from './styles';

export function SignOut() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();
  const { signOut } = useAuth();

  function handleGoBack() {
    navigate('home')
  }

  return (
    <Container>
      <Wrapper>
        <Title>Deseja mesmo sair?</Title>

        <ContainerButtons>
          <Button text='Não' type='BLACK' size='48' onPress={handleGoBack} />
          <Button text='Sim' type='BLUE' size='48' onPress={signOut}/>
        </ContainerButtons>
      </Wrapper>
    </Container>
  );
}