import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import {
  Container,
  HeaderInfoAndFilter,
  Text,
  Filter
} from './styles';

import { HeaderOptions } from '@components/HeaderOptions';
import { CardMyAds } from '@components/CardMyAds';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { ProductAdDTO } from '@dtos/ProductAdDTO';
import { api } from '@services/api';
import { DetailsAd } from '@dtos/DetailsAd';



export function AllMyAds() {
  const [selected, setSelected] = useState();
  const [myAds, setMyAds] = useState<DetailsAd[]>([]);

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();


  function NavigateDetailsMyAd(Id: string){
    navigate('DetailsMyAds', {Id})
  }

  async function fetchAllMyAds() {
    try {
      const response = await api.get('/users/products')
      setMyAds(response.data)
  
    } catch (error) {
      console.log(error)
    }
  }
  

  useFocusEffect(useCallback(() => {
    fetchAllMyAds()
  }, []))

  return (

    <Container>
      <HeaderOptions
        text='Meus anúncios'
        showEditIcon={true}
        nameIcon='plus'
        navigateCreate={true}
        onPress={() => navigate('home')}
      />

      <HeaderInfoAndFilter>
        <Text>{`${myAds.length} anúncios`}</Text>

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
        data={myAds}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CardMyAds data={item}
            onPress={() => NavigateDetailsMyAd(item.id)}
          />
        )}
        numColumns={2}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
      />
    </Container>

  );
}