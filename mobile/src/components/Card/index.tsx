import React from 'react';
import {TouchableOpacityProps} from 'react-native'

import {
  Container,
  ImgProduct,
  DescriptionProd,
  Cifrao,
  ValueProduct,
  UserPhoto,
  Used,
  StatusProduct
} from './styles';

type Props = TouchableOpacityProps & {
  status?: boolean;
  data: {
    img: string;
    descri: string;
    valor: string;
    user: string;
}
}

export function Card({status, data, ...rest}: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <ImgProduct
        source={{ uri: data.img }}
      />

      <DescriptionProd>{data.descri}</DescriptionProd>
      <Cifrao>R$
        <ValueProduct>{data.valor}</ValueProduct>
      </Cifrao>

      <UserPhoto
        source={{ uri: data.user }}
      />

      <Used>
        <StatusProduct>Novo</StatusProduct>
      </Used>
    </Container>
  );
}