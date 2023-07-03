import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import {
  Container,
  InputText,
  ButtonEye,
  IconButton
} from './styles';

type Props = TextInputProps & {
  password?: boolean;
}

export function Input({ password=false, ...rest }: Props) {
  const [eye, setEye] = useState(true);

  function handleViewPassword() {
    setEye(!eye)
  }

  return (
    <Container>
      <InputText placeholderTextColor={'#9F9BA1'} secureTextEntry={eye} {...rest}/>
      {password &&
        <ButtonEye onPress={handleViewPassword}>
          {
            eye === true
              ? <IconButton name={'eye'} />
              : <IconButton name={'eye-off'} />
          }
        </ButtonEye>}
    </Container>
  );
}