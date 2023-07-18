import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, ScrollView, View } from 'react-native'


import {
  Container,
  ContainerPadding,
  HeaderPhotoAndUsername,
  UserPhoto,
  NameUser,
  IsNew,
  StatusProduct,
  NameProductAndValue,
  NameProduct,
  ValueCifrao,
  ValueProduct,
  AboutProduct,
  TextBold,
  TextSimples,
  PaymentMethod,
  MethodsContainer,
  IconMethod,
  FooterButton,
  PhotoProductAnun,
  Active,
  Deactivated,
  Photos,
  TextDeactivated
} from './styles';

import { HeaderOptions } from '@components/HeaderOptions';
import { Button } from '@components/Button';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';
import { DetailsAd } from '@dtos/DetailsAd';
import { api } from '@services/api';
import { Loading } from '@components/Loading';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { SlidePhotoProduct } from '@components/SlidePhotoProduct';

type RouteParamsProps = {
  Id: string
}

type Props = {
  isNew: boolean;
}




export function DetailsMyAds() {
  const [adUser, setAdUser] = useState<DetailsAd>({} as DetailsAd)
  const [isLoading, setIsLoading] = useState(false)

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const route = useRoute();
  const { Id } = route.params as RouteParamsProps;

  async function fetchAdDetails() {
    try {
      setIsLoading(true)
      const response = await api.get(`/products/${Id}`)
      setAdUser(response.data)

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
    finally {
      setIsLoading(false)
    }
  }


  async function handleRemoveAd() {
    try {
      setIsLoading(true)
      await api.delete(`/products/${Id}`)
      navigate('AllMyAds')

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleDeactivated() {
    try {
      await api.patch(`/products/${Id}`, {
        is_active: false
      })

      navigate('AllMyAds')

    } catch (error) {
      console.log(error)
    }
  }

  async function handleActiveAd() {
    try {
      await api.patch(`/products/${Id}`, {
        is_active: true
      })

      navigate('AllMyAds')

    } catch (error) {
      console.log(error)
    }
  }


  useFocusEffect(useCallback(() => {
    fetchAdDetails()
  }, [Id]))

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <ScrollView>

        <ContainerPadding>
          <HeaderOptions
            showBackIcon={true}
            nameIcon='edit-3'
            showEditIcon={true}
            onPress={() => navigate('AllMyAds')}
          />
        </ContainerPadding>

        <View>
          <FlatList
            data={[adUser]}
            renderItem={({ item }) => (
              <Photos>
                <Active>
                  {
                    item.product_images && (
                      <SlidePhotoProduct data={item.product_images[0]?.path}/>
                    )
                  }
                </Active>

                {
                  !item.is_active && (
                    <Deactivated>
                      <TextDeactivated>Anúncio desativado</TextDeactivated>
                    </Deactivated>
                  )
                }

              </Photos>
            )}
            horizontal
            pagingEnabled
          />
        </View>

        <ContainerPadding>
          <HeaderPhotoAndUsername>
            {
              adUser.user?.avatar && (
                <UserPhoto source={{ uri: `${api.defaults.baseURL}/images/${adUser.user.avatar}` }} />
              )
            }
            <NameUser>{adUser.user?.name}</NameUser>
          </HeaderPhotoAndUsername>

          <IsNew isNew={adUser.is_new}>
            <StatusProduct>{adUser.is_new ? "Novo" : "Usado"}</StatusProduct>
          </IsNew>

          <NameProductAndValue>
            <NameProduct>{adUser.name}</NameProduct>
            <ValueCifrao>R$
              <ValueProduct>{adUser.price}</ValueProduct>
            </ValueCifrao>
          </NameProductAndValue>

          <AboutProduct>
            {adUser.description}
          </AboutProduct>

          <TextBold>
            Aceita troca?
            <TextSimples> {adUser.accept_trade ? "Sim" : "Não"}</TextSimples>
          </TextBold>

          <PaymentMethod>
            <TextBold>Meios de pagamento:</TextBold>

            {
              adUser && adUser.payment_methods &&
              adUser.payment_methods.map((method) => (
                <MethodsContainer key={method.name}>
                  <IconMethod name={'money'} />
                  <TextSimples>{method.name}</TextSimples>
                </MethodsContainer>
              ))
            }

          </PaymentMethod>

        </ContainerPadding>
        <FooterButton>
          {
            adUser.is_active
              ? <Button text='Desativar anúncio' type='BLACK' size='100' icon='power' onPress={handleDeactivated} />
              : <Button text='Reativar anúncio' type='BLUE' size='100' icon='power' onPress={handleActiveAd} />
          }
          <Button text='Excluir anúncio' type='GRAY' size='100' icon='trash' onPress={handleRemoveAd} />
        </FooterButton>
      </ScrollView>
    </Container>
  );
}