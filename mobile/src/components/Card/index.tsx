import { ProductAdDTO } from '@dtos/ProductAdDTO';
import { api } from '@services/api';
import React from 'react';
import { useAuth } from '@hooks/useAuth';

import {
  Container,
  ImgProduct,
  DescriptionProd,
  Cifrao,
  ValueProduct,
  UserPhoto,
  Used,
  StatusProduct,
  ContainerIsActive,
  ImgContainer,
  TextDeactivated
} from './styles';
import { DetailsAd } from '@dtos/DetailsAd';


type Props = {
  data: DetailsAd;
  photoUser?: boolean;
  onPress: () => void
}

export function Card({ data, photoUser, ...rest }: Props) {

  return (
    <Container activeOpacity={0.7} {...rest}>


      <ImgContainer>
        <ImgProduct
          source={{ uri: `${api.defaults.baseURL}/images/${data.product_images[0]?.path}` }}
        />


        <Used isNew={data.is_new}>
          <StatusProduct>{data.is_new ? "Novo" : "Usado"}</StatusProduct>
        </Used>

      </ImgContainer>

      <DescriptionProd>{data.name}</DescriptionProd>
      <Cifrao>R$
        <ValueProduct>{data.price}</ValueProduct>
      </Cifrao>

    </Container>
  );
}