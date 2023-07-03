import React, { useState } from 'react';
import { FlatList } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  HeaderInfoAndFilter,
  Text,
  Filter
} from './styles';

import { HeaderOptions } from '@components/HeaderOptions';
import { Card } from '@components/Card';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function AllMyAds() {
  const [selected, setSelected] = useState();
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
  ])

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  return (

    <Container>
      <HeaderOptions
        text='Meus anúncios'
        showEditIcon={true}
        nameIcon='plus'
        navigateCreate={true}
      />

      <HeaderInfoAndFilter>
        <Text>9 anúncios</Text>

        <Filter>
          <RNPickerSelect
            placeholder={{ label: "Todos", value: 'todos' }}
            onValueChange={(value) => {
              setSelected(value)
              console.log(selected)
            }}

            items={[
              { label: 'Ativos', value: 'Ativos', key: 'Ativos' },
              { label: 'Inativos', value: 'Inativos', key: 'Inativos' },
            ]}
          />
        </Filter>

      </HeaderInfoAndFilter>

      <FlatList
        data={ads}
        renderItem={({ item }) => (
          <Card data={item}
            onPress={() => navigate('DetailsMyAds')}
          />
        )}
        numColumns={2}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
      />
    </Container>

  );
}