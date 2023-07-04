import { ProductAdDTO } from '@dtos/ProductAdDTO';
import { api } from '@services/api';
import React from 'react';
import { TouchableOpacityProps } from 'react-native'

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
  data: ProductAdDTO;
}

export function Card({ data, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <ImgProduct
        source={{ uri: `${api.defaults.baseURL}/images/${data.product_images[0].path}` }}
      />

      <DescriptionProd>{data.name}</DescriptionProd>
      <Cifrao>R$
        <ValueProduct>{data.price}</ValueProduct>
      </Cifrao>

      <UserPhoto
        source={{ uri: `${api.defaults.baseURL}/images/${data.user.avatar}` }}
      />

      <Used>
        <StatusProduct>Novo</StatusProduct>
      </Used>
    </Container>
  );
}