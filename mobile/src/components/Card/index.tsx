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


type Props = {
  data: ProductAdDTO;
  onPress: () => void
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

      <Used isNew={data.is_new}>
        <StatusProduct>{data.is_new ? "Novo" : "Usado"}</StatusProduct>
      </Used>
    </Container>
  );
}