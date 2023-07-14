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

export function CardMyAds({ data, photoUser, ...rest }: Props) {
  const { user } = useAuth()

  return (
    <Container activeOpacity={0.7} {...rest}>


      <ImgContainer>
        <ImgProduct
          source={{ uri: `${api.defaults.baseURL}/images/${data.product_images[0]?.path}` }}
        />


        <Used isNew={data.is_new}>
          <StatusProduct>{data.is_new ? "Novo" : "Usado"}</StatusProduct>
        </Used>

        {
          !data.is_active ? (
            <ContainerIsActive>
              <TextDeactivated>Anúncio desativado</TextDeactivated>
            </ContainerIsActive>
          ) : null

        }

      </ImgContainer>

      <DescriptionProd isActive={data.is_active}>{data.name}</DescriptionProd>
      <Cifrao isActive={data.is_active}>R$
        <ValueProduct isActive={data.is_active}>{data.price}</ValueProduct>
      </Cifrao>

      {
        photoUser && (
          <UserPhoto
            source={{ uri: `${api.defaults.baseURL}/images/${data.user.avatar}` }}
          />
        )
      }




    </Container>
  );
}