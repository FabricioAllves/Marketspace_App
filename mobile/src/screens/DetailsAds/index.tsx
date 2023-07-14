import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native'

import { HeaderOptions } from '@components/HeaderOptions';
import { SlidePhotoProduct } from '@components/SlidePhotoProduct';
import { Button } from '@components/Button';
import { useRoute, useNavigation } from '@react-navigation/native';
import { api } from '@services/api';
import { DetailsAd } from '@dtos/DetailsAd';
import { Loading } from '@components/Loading';

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
  ContainerValue,
  Cifrao,
  Value,
} from './styles';
import { AppNavigatorRoutesProps } from '@routes/app.routes';


type RouteParamsProps = {
  Id: string
}


export function DetailsAds() {
  const [adSalesDetails, setAdSalesDetails] = useState<DetailsAd>({} as DetailsAd)
  const [isLoding, setIsLoading] = useState(false);

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const route = useRoute();
  const { Id } = route.params as RouteParamsProps;

  async function fetchAdSalesDetails() {
    try {
      setIsLoading(true)
      const response = await api.get(`/products/${Id}`)
      setAdSalesDetails(response.data)

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAdSalesDetails()
  }, [Id])


  return (
    <>
      {
        isLoding
          ? <Loading />
          : <>
            <Container>
              <ContainerPadding>
                <HeaderOptions
                  showBackIcon={true}
                  nameIcon='edit-3'
                  onPress={() => navigate('home')}
                />
              </ContainerPadding>

              <View>
                <FlatList
                  data={adSalesDetails.product_images}
                  renderItem={({ item }) => (
                    <SlidePhotoProduct data={item.path} />
                  )}
                  horizontal
                  pagingEnabled
                />
              </View>

              <ContainerPadding>
                <HeaderPhotoAndUsername>
                  {
                    adSalesDetails.user?.avatar && (
                      <UserPhoto source={{ uri: `${api.defaults.baseURL}/images/${adSalesDetails.user.avatar}` }} />
                    )
                  }
                  <NameUser>Fabricio</NameUser>
                </HeaderPhotoAndUsername>

                <IsNew isNew={adSalesDetails.is_new}>
                  <StatusProduct isNew={adSalesDetails.is_new}>{adSalesDetails.is_new ? "Novo" : "Usado"}</StatusProduct>
                </IsNew>

                <NameProductAndValue>
                  <NameProduct>{adSalesDetails.name}</NameProduct>
                  <ValueCifrao>R$
                    <ValueProduct>{adSalesDetails.price}</ValueProduct>
                  </ValueCifrao>
                </NameProductAndValue>

                <AboutProduct>
                  {adSalesDetails.description}
                </AboutProduct>

                <TextBold>
                  Aceita troca?
                  <TextSimples>{adSalesDetails.accept_trade ? "  Sim" : "  Não"}</TextSimples>
                </TextBold>

                <PaymentMethod>
                  <TextBold>Meios de pagamento:</TextBold>
                  {
                    adSalesDetails && adSalesDetails.payment_methods &&
                    adSalesDetails.payment_methods.map((method) => (
                      <MethodsContainer key={method.name}>
                        <IconMethod name={'money'} />
                        <TextSimples>{method.name}</TextSimples>
                      </MethodsContainer>
                    ))
                  }

                </PaymentMethod>

              </ContainerPadding>
            </Container>
            <FooterButton>
              <ContainerValue>

                <Cifrao>R$
                  <Value>{adSalesDetails.price}</Value>
                </Cifrao>

              </ContainerValue>

              <Button text='Entrar em contato' type='BLUE' size='FULL' icon='send' />

            </FooterButton>
          </>
      }
    </>
  );
}