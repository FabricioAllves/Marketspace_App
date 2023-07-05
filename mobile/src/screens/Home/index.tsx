import React, { useEffect, useState } from 'react';
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
  Cards,
  ListEmptyContainer
} from './styles';
import { ModalFilter } from '@components/ModalFilter';
import { api } from '@services/api';
import { ProductAdDTO } from '@dtos/ProductAdDTO';
import { Loading } from '@components/Loading';

export function Home() {
  const { user, isLoadingStorageData } = useAuth();

  const [modalVisible, setModalVisible] = useState(false)
  const [ads, setAds] = useState<ProductAdDTO[]>([])

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  function handleDetailsAnum(AdId: string) {
    navigate('DetailsAds', {AdId})
  }

  function handleMyAds() {
    navigate('AllMyAds')
  }

  function handleCreateAds() {
    navigate('CreateAds')
  }

  async function fetchAds() {
    try {
      const response = await api.get('/products')
      setAds(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAds()
  }, [])

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

      {isLoadingStorageData ? <Loading /> :
      <Cards>
      <FlatList
        data={ads}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Card
            onPress={() => handleDetailsAnum(item.id)}
            data={item}
            photoUser={true}
          />
        )}
        numColumns={2}
        scrollEnabled={false}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmptyContainer>
            <Text>Sem anuncíos para venda no momento😪</Text>
          </ListEmptyContainer>
        }
      />
    </Cards>}

      <Modal visible={modalVisible} animationType='fade' transparent>
        <ModalFilter
          setVisible={() => setModalVisible(false)}
        />
      </Modal>
    </Container>
  );
}
