import React from 'react';
import { useAuth } from '@hooks/useAuth';

import {
  Container,
  TextButton,
  Icon
} from './styles';

type Props = {
  text: string;
  icon?: string
  type: 'BLUE' | 'BLACK' | 'GRAY'
  size?: '48' | '100' | 'FULL';
  onPress?: () => void
}

export function Button({ text, icon, size, type = 'GRAY', ...rest }: Props) {



  return (
    <Container
      type={type}
      activeOpacity={0.7}
      size={size}
      {...rest}
    >

      <Icon type={type} name={icon} />

      <TextButton type={type}>
        {text}
      </TextButton>
    </Container>
  );
}