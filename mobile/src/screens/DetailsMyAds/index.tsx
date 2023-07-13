import React, { useState, useEffect } from 'react';
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
} from './styles';
import { HeaderOptions } from '@components/HeaderOptions';
import { SlidePhotoProduct } from '@components/SlidePhotoProduct';
import { Button } from '@components/Button';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DetailsAd } from '@dtos/DetailsAd';
import { api } from '@services/api';
import { Loading } from '@components/Loading';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

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

  const [method, setMetho] = useState([
    {
      "type": "barcode",
      "name": "Boleto"
    },
    {
      "type": "product-hunt",
      "name": "Pix"
    },
    {
      "type": "money",
      "name": "Dinheiro"
    },
    {
      "type": "credit-card",
      "name": "Cartão de Credito"
    },
    {
      "type": "university",
      "name": "Depósito Bancário"
    }
  ])

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

  useEffect(() => {
    fetchAdDetails()
  }, [Id])

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
          />
        </ContainerPadding>

        <View>
          <FlatList
            data={adUser.product_images}
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
          <Button text='Desativar anúncio' type='BLACK' size='100' icon='trash' />
          <Button text='Excluir anúncio' type='GRAY' size='100' icon='power' onPress={handleRemoveAd} />
        </FooterButton>
      </ScrollView>
    </Container>
  );
}