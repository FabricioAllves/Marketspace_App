import React, { useEffect, useState } from 'react';
import { FlatList, View, ScrollView } from 'react-native'


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
  Value
} from './styles';
import { HeaderOptions } from '@components/HeaderOptions';
import { SlidePhotoProduct } from '@components/SlidePhotoProduct';
import { Button } from '@components/Button';
import { useRoute } from '@react-navigation/native';
import { api } from '@services/api';
import { DetailsAd } from '@dtos/DetailsAd';
import { Loading } from '@components/Loading';

type RouteParamsProps = {
  AdId: string
}


export function DetailsAds() {
  const [adSalesDetails, setAdSalesDetails] = useState<DetailsAd>({} as DetailsAd)
  const [isLoding, setIsLoading] = useState(false)

  const route = useRoute();
  const { AdId } = route.params as RouteParamsProps;



  async function fetchAdSalesDeatils() {
    try {
      setIsLoading(true)
      const response = await api.get(`/products/${AdId}`)
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
    fetchAdSalesDeatils()
  }, [AdId])


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
                />
              </ContainerPadding>

              <View>
                <FlatList
                  data={adSalesDetails && adSalesDetails.product_images}
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
                    adSalesDetails && adSalesDetails.user && adSalesDetails.user.avatar && (
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