import React, { useState } from 'react';
import { FlatList, ScrollView, StatusBar, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useAuth } from '@hooks/useAuth';

import {
  Container,
  Header,
  TitleHeader,
  SubTitleHeader,
  PhotosPreviewProducts,
  ContainerInfo,
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
  ViewButtonOption,
} from './styles';

import { Button } from '@components/Button';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { api } from '@services/api';
import { AppError } from '@utils/AppError';


interface Params {
  is_new: boolean,
  accept_trade: boolean,
  arrayImageProducts: string,
  name: string,
  description: string,
  price: number,
  photos: string[]
}


export function PreviewMyAds() {

  const {user, setPayment_methods, payment_methods} = useAuth();

  const route = useRoute();

  const {
    is_new,
    accept_trade,
    arrayImageProducts,
    name,
    description,
    price,
  } = route.params as Params;

  const {navigate} = useNavigation<AppNavigatorRoutesProps>()

  function goBack() {
    navigate('CreateAds')
  }

  async function handleConfirmAds() {
    const userPhotoUploadFormm = new FormData();


    try {
      const data = await api.post('/products', { name, description, accept_trade, price, is_new, payment_methods })

      userPhotoUploadFormm.append('product_id', data.data.id);
      if (arrayImageProducts) {
        userPhotoUploadFormm.append('images', arrayImageProducts[0]);
        userPhotoUploadFormm.append('images', arrayImageProducts[1]);
        userPhotoUploadFormm.append('images', arrayImageProducts[2]);
      }

      await api.post('/products/images', userPhotoUploadFormm, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setPayment_methods([])
      navigate('AllMyAds')

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possivel criar o produto. Tente novamente mais tarde.'
      console.log(title)
    }
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle='dark-content'
          backgroundColor="#647AC7"
          translucent
        />

        <TitleHeader>
          Pré visualização do anúncio
        </TitleHeader>

        <SubTitleHeader>
          É assim que seu produto vai aparecer!
        </SubTitleHeader>

      </Header>



      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View>
          <FlatList
            data={arrayImageProducts}
            renderItem={({ item }) => (
              <PhotosPreviewProducts source={{uri: item.uri}}/>
            )}
            horizontal
            pagingEnabled
          />
        </View>

        <ContainerInfo>
          <HeaderPhotoAndUsername>
            <UserPhoto source={{ uri: 'https://github.com/FabricioAllves.png' }} />
            <NameUser>{user.name}</NameUser>
          </HeaderPhotoAndUsername>

          <IsNew>
            <StatusProduct>{is_new ? "Novo":"Usado"}</StatusProduct>
          </IsNew>

          <NameProductAndValue>
            <NameProduct>{name}</NameProduct>
            <ValueCifrao>R$
              <ValueProduct>{price}</ValueProduct>
            </ValueCifrao>
          </NameProductAndValue>

          <AboutProduct>
           {description}
          </AboutProduct>

          <TextBold>
            Aceita troca?
            <TextSimples>{accept_trade ? " Sim" : " Não"}</TextSimples>
          </TextBold>

          <PaymentMethod>
            <TextBold>Meios de pagamento:</TextBold>
            {//Teste
              payment_methods.map(method => (
                <MethodsContainer key={method}>
                  <IconMethod name={'money'} />
                  <TextSimples>{method}</TextSimples>
                </MethodsContainer>
              ))
            }
          </PaymentMethod>

        </ContainerInfo>

      </ScrollView>
      <ViewButtonOption>
        <Button
          text='Voltar e editar'
          type='GRAY'
          size='48'
          icon='arrow-left'
          onPress={goBack}
        />
        <Button
          text='Publicar'
          type='BLACK'
          size='48'
          icon='tag'
          onPress={handleConfirmAds}
        />
      </ViewButtonOption>
    </Container>
  );
}