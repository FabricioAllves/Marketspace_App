import React, { useState } from 'react';
import { FlatList, ScrollView, StatusBar, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Header,
  TitleHeader,
  SubTitleHeader,
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
import { SlidePhotoProduct } from '@components/SlidePhotoProduct';
import { Button } from '@components/Button';
import { AppNavigatorRoutesProps } from '@routes/app.routes';


export function PreviewMyAds() {
  const [photo, setPhoto] = useState<string[]>([
    'https://th.bing.com/th/id/R.652c6f323ab35e15f52354de58ed4090?rik=8JtM0Lnr6uRbgw&pid=ImgRaw&r=0',
    'https://revistabikeup.com.br/wp-content/uploads/2017/01/tonic-fabrications-cyclocross-29er-1.jpg',
    'https://64.media.tumblr.com/2ab981342a0ea33dbe51566c2cc7017f/tumblr_mh7toopVSx1qcxw6so1_400.jpg',
  ]);

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

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function goBack() {
    navigation.navigate('CreateAds')
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
            data={photo}
            renderItem={({ item }) => (
              <SlidePhotoProduct data={item} />
            )}
            horizontal
            pagingEnabled
          />
        </View>

        <ContainerInfo>
          <HeaderPhotoAndUsername>
            <UserPhoto source={{ uri: 'https://github.com/FabricioAllves.png' }} />
            <NameUser>Fabricio</NameUser>
          </HeaderPhotoAndUsername>

          <IsNew>
            <StatusProduct>novo</StatusProduct>
          </IsNew>

          <NameProductAndValue>
            <NameProduct>Bicicleta</NameProduct>
            <ValueCifrao>R$
              <ValueProduct>120.00</ValueProduct>
            </ValueCifrao>
          </NameProductAndValue>

          <AboutProduct>
            Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas
            urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
          </AboutProduct>

          <TextBold>
            Aceita troca?
            <TextSimples> Sim</TextSimples>
          </TextBold>

          <PaymentMethod>
            <TextBold>Meios de pagamento:</TextBold>
            {//Teste
              method.map(method => (
                <MethodsContainer key={method.name}>
                  <IconMethod name={method.type} />
                  <TextSimples>{method.name}</TextSimples>
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
          onPress={() => { }}
        />
      </ViewButtonOption>
    </Container>
  );
}