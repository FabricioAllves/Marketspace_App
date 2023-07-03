import React, { useState } from 'react';
import { FlatList, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { useAuth } from '@hooks/useAuth';

import {
  Container,
  Group,
  Header,
  Wrapper,
  UserPhoto,
  Greeting,
  NameUser,
  Sell,
  Text,
  Info,
  Active,
  Icon,
  Counter,
  Quantity,
  ActivityAnun,
  ButtonLink,
  TextMyAnunLink,
  Content,
  Search,
  InputSearch,
  ButtonIcon,
  Divider,
  IconInput,
  Cards
} from './styles';
import { ModalFilter } from '@components/ModalFilter';
import { api } from '@services/api';

export function Home() {
  const { user } = useAuth();

  const [modalVisible, setModalVisible] = useState(false)
  const [ads, setAds] = useState([
    {
      img: 'https://th.bing.com/th/id/OIP.DlGFMadQwf3qCuealJPPUwHaE8?pid=ImgDet&w=1500&h=1000&rs=1',
      descri: 'Bicicleta',
      valor: '59,00',
      user: 'https://github.com/FabricioAllves.png'
    },
    {
      img: 'https://http2.mlstatic.com/bicicleta-aro-29-sense-fun-feminina-rosa-24v-shimano-D_NQ_NP_933428-MLB28389782468_102018-F.jpg',
      descri: 'Bicicleta Ciclismo',
      valor: '81,00',
      user: 'https://github.com/FabricioAllves.png'
    },
    {
      img: 'https://i.pinimg.com/originals/1e/d2/ba/1ed2baf35ed5459e978cca8c52084b6b.jpg',
      descri: 'Bicicleta Ciclismo',
      valor: '101,00',
      user: 'https://github.com/FabricioAllves.png'
    },
    {
      img: 'https://i.pinimg.com/originals/bf/66/0d/bf660d99d2378f6be5134056df7c2cde.jpg',
      descri: 'Bicicleta Ciclismo',
      valor: '101,00',
      user: 'https://github.com/FabricioAllves.png'
    },
    {
      img: 'https://th.bing.com/th/id/OIP.vJSKj33YX8BAeoJPYeimrwHaE-?pid=ImgDet&w=640&h=430&rs=1',
      descri: 'Bicicleta Ciclismo',
      valor: '101,00',
      user: 'https://github.com/FabricioAllves.png'
    },
    {
      img: 'https://th.bing.com/th/id/OIP.cfqi66U8uzBKEeyLEFCKBAHaFj?pid=ImgDet&w=1024&h=768&rs=1',
      descri: 'Bicicleta Ciclismo',
      valor: '101,00',
      user: 'https://github.com/FabricioAllves.png'
    },
    {
      img: 'https://i.pinimg.com/originals/1e/d2/ba/1ed2baf35ed5459e978cca8c52084b6b.jpg',
      descri: 'Bicicleta Ciclismo',
      valor: '101,00',
      user: 'https://github.com/FabricioAllves.png'
    },
    {
      img: 'https://i.pinimg.com/originals/bf/66/0d/bf660d99d2378f6be5134056df7c2cde.jpg',
      descri: 'Bicicleta Ciclismo',
      valor: '101,00',
      user: 'https://github.com/FabricioAllves.png'
    },
    {
      img: 'https://th.bing.com/th/id/OIP.vJSKj33YX8BAeoJPYeimrwHaE-?pid=ImgDet&w=640&h=430&rs=1',
      descri: 'Bicicleta Ciclismo',
      valor: '101,00',
      user: 'https://github.com/FabricioAllves.png'
    },
    {
      img: 'https://th.bing.com/th/id/OIP.cfqi66U8uzBKEeyLEFCKBAHaFj?pid=ImgDet&w=1024&h=768&rs=1',
      descri: 'Bicicleta Ciclismo',
      valor: '101,00',
      user: 'https://github.com/FabricioAllves.png'
    }
  ])

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  function handleDetailsAnum() {
    navigate('DetailsAds')
  }

  function handleMyAds() {
    navigate('AllMyAds')
  }

  function handleCreateAds() {
    navigate('CreateAds')
  }

  return (
    <Container>
      <Group>
        <Header>
          <Wrapper>
            <UserPhoto
              source={{ uri: `${api.defaults.baseURL}/images/${user.avatar}` }}
            />
            <Greeting>
              Boas vindas,{'\n'}
              <NameUser>{`${user.name}!`}</NameUser>
            </Greeting>
          </Wrapper>

          <Button
            type='BLACK'
            text='Criar anúncio'
            icon='plus'
            size='FULL'
            onPress={handleCreateAds}
          />
        </Header>

        <Sell>
          <Text>Seus produtos anunciados para venda </Text>

          <Info onPress={handleMyAds}>
            <Active>
              <Icon name={'tag'} />
              <Counter>
                <Quantity>4</Quantity>
                <ActivityAnun>anúncios ativos</ActivityAnun>
              </Counter>
            </Active>

            <ButtonLink>
              <TextMyAnunLink>Meus anúncios</TextMyAnunLink>
              <Icon name={'arrow-right'} />
            </ButtonLink>
          </Info>
        </Sell>

        <Content>
          <Text>Compre produtos variados</Text>
        </Content>

        <Search>
          <InputSearch placeholder='Buscar anúncio' />
          <ButtonIcon>
            <IconInput name={'search'} />
          </ButtonIcon>
          <Divider />
          <ButtonIcon onPress={() => setModalVisible(true)}>
            <IconInput name={'sliders'} />
          </ButtonIcon>
        </Search>
      </Group>

      <Cards>
        <FlatList
          data={ads}
          renderItem={({ item }) => (
            <Card
              onPress={handleDetailsAnum} data={item}
            />
          )}
          numColumns={2}
          scrollEnabled={false}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
        />
      </Cards>

      <Modal visible={modalVisible} animationType='fade' transparent>
        <ModalFilter
          setVisible={() => setModalVisible(false)}
        />
      </Modal>
    </Container>
  );
}
