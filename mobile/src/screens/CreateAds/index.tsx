import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { RadioSelect } from '@components/RadioSelect';
import { HeaderOptions } from '@components/HeaderOptions';




import { useAuth } from '@hooks/useAuth';
import { Controller, useForm } from 'react-hook-form'


import {
  Container,
  ContainerScrollView,
  ContainerPadding,
  Title,
  Text,
  ContainerAddPhoto,
  AddPhoto,
  RemovePhoto,
  Photo,
  PreviewPhoto,
  Icon,
  ContainerInputs,
  InputTextArea,
  ContainerInputValue,
  TextInput,
  Trade,
  AcceptTrade,
  ViewButtonOption,
  ContainerRadioSelect,
  RadioOption,
  RadioCicle,
  IconRadio,
  RadioText,
} from './styles';
import { StackNavigatorRoutesProps } from '@routes/app.stack.routes';


interface FormData {
  name: string;
  description: string
  price: number
}

interface ImageProduct {
  name: string;
  uri: string;
  type: string;
}

export function CreateAds() {

  const [is_new, setIs_new] = useState<boolean>(true)
  const [accept_trade, setAccept_trade] = useState(false);
  const [photos, setPhotos] = useState<string[]>([])
  const [arrayImageProducts, setArrayImageProducts] = useState<ImageProduct[]>([])

  const {  user, setPayment_methods} = useAuth();


  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const navigation = useNavigation<StackNavigatorRoutesProps>();

  function handlePreviewAds({ name, description, price }: FormData) {
    navigation.navigate('PreviewMyAds', {
      is_new,
      accept_trade,
      arrayImageProducts,
      name,
      price,
      description,
    })
  }

  async function handleOpenGalery() {
    try {
      let photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // tipo de midia
        quality: 1,
        aspect: [4, 4],
      });

      if (photoSelected.canceled) {
        return
      }
      // Existe uma URI?
      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);

        if (photoInfo.exists && (photoInfo.size / 1024 / 1024 > 5)) {
          // Se for maior que 5MB vai cair aqui
          return Alert.alert("Essa imagem e muito grande. Escolha uma de ate 5MB")
        }
        //Retornando a extensao da image
        const fileExtension = photoSelected.assets[0].uri.split('.').pop();

        const photoFile = {
          name: `${user.name}.${fileExtension}`.toLowerCase(),
          uri: photoSelected.assets[0].uri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`,
        } as any;

        setArrayImageProducts([...arrayImageProducts, photoFile])
        

      }
    } catch (error) {
      console.log(error)
    }
  }

  function handleGoBack(){
    navigation.goBack()
    setPhotos([])
    setPayment_methods([])
    setArrayImageProducts([])
    reset();
  }



  function isNew(status: boolean) {
    setIs_new(!status)
    console.log(status)
  }

  function handleRemovePhotoDeleted(index: ImageProduct){
    const data = arrayImageProducts.filter(item => item != index)
    setArrayImageProducts(data)
    console.log(arrayImageProducts)
  }

  return (
    <Container>
      <ContainerScrollView>
        <ContainerPadding>

          <HeaderOptions
            showBackIcon={true}
            text='Criar anúncio'
            navigateCreate={false}
            onPress={handleGoBack}
          />

          <Title>Imagens</Title>
          <Text>Escolha até 3 imagens para mostrar o quanto o seu produto é incrível!</Text>



          <ContainerAddPhoto>
            {arrayImageProducts.map((photo, index) => (
              <PreviewPhoto key={index}>
                <Photo source={{ uri: arrayImageProducts[index].uri }} />
                <RemovePhoto onPress={() => handleRemovePhotoDeleted(photo)}></RemovePhoto>
              </PreviewPhoto>
            ))}
            {arrayImageProducts.length === 3 ?
              null :
              <AddPhoto onPress={handleOpenGalery} >
                <Icon name='plus' />
              </AddPhoto>
            }

          </ContainerAddPhoto>


          <Title>Sobre o produto</Title>

          <ContainerInputs>
            <Controller
              control={control}
              name='name'
              rules={{ required: 'Informe um título para o anúncio.' }}
              render={({ field: { onChange, value } }) => (
                <Input
                  secureTextEntry={false}
                  placeholder='Título do anúncio'
                  value={value}
                  onChangeText={onChange}
                />
                //errorMessage={errors.password?.message}
              )}
            />

            <Controller
              control={control}
              name='description'
              rules={{ required: 'Informe a descrição do produto' }}
              render={({ field: { onChange, value } }) => (
                <InputTextArea
                  placeholder='Descrição do produto'
                  multiline
                  numberOfLines={5}
                  value={value}
                  onChangeText={onChange}
                />
                //errorMessage={errors.password?.message}
              )}
            />

          </ContainerInputs>

          <ContainerRadioSelect>
            <RadioOption>
              <RadioCicle onPress={() => isNew(false)}>
                {
                  !is_new ?
                    <IconRadio isTrue={!is_new} name='radio-button-off-outline' /> :
                    <IconRadio name='radio-button-on-outline' />
                }
              </RadioCicle>
              <RadioText>Produto novo</RadioText>
            </RadioOption>

            <RadioOption>
              <RadioCicle onPress={() => isNew(true)}>
                {
                  is_new ?
                    <IconRadio isTrue={is_new} name='radio-button-off-outline' /> :
                    <IconRadio name='radio-button-on-outline' />
                }
              </RadioCicle>
              <RadioText>Produto usado</RadioText>
            </RadioOption>
          </ContainerRadioSelect>

          <Title>Venda</Title>

          <ContainerInputValue>
            <TextInput>R$</TextInput>

            <Controller
              control={control}
              name='price'
              rules={{ required: 'Informe o valor do Produto.' }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='Valor do produto'
                  secureTextEntry={false}
                  value={value ? value.toString() : ''}
                  onChangeText={(text) => onChange(parseInt(text))}
                  keyboardType={'numeric'}
                />
                //errorMessage={errors.password?.message}
              )}
            />

          </ContainerInputValue>

          <Title>Aceita troca?</Title>

          <Trade>
            <AcceptTrade
              value={accept_trade}
              onValueChange={(valueSelected) => setAccept_trade(valueSelected)}
            />
          </Trade>

          <Title>Meios de pagamentos</Title>

          <RadioSelect />
        </ContainerPadding>

      </ContainerScrollView>
      <ViewButtonOption>
        <Button
          text='Cancelar'
          type='GRAY'
          size='48'
          onPress={handleGoBack}
        />
        <Button
          text='Avançar'
          type='BLACK'
          size='48'
          onPress={handleSubmit(handlePreviewAds)}
        />
      </ViewButtonOption>
    </Container>
  );
}