import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { RadioSelect } from '@components/RadioSelect';
import { HeaderOptions } from '@components/HeaderOptions';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { api } from '@services/api';
import { useAuth } from '@hooks/useAuth';
import { Controller, useForm } from 'react-hook-form'
import { AppError } from '@utils/AppError';

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

interface FormData {
  name: string;
  description: string
  price: number
}

export function CreateAds() {
  const [is_new, setIs_new] = useState(false)
  const [accept_trade, setAccept_trade] = useState(false);
  const [productImage, setProductImage] = useState<File | undefined>();
  
  const { payment_methods, setPayment_methods, user } = useAuth();

  const [fotos, setFotos] = useState(["gg.png"])

  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handlePreviewAds() {
    navigation.navigate('PreviewMyAds')
  }

  async function handleOpenGalery() {
    try {
      let photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // tipo de midia
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true //usuario pode editar a imagem?
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
          type: `${photoSelected.assets[0].type}/${fileExtension}`
        } as any;

        setProductImage(photoFile)
        console.log(productImage)

        // console.log("--------------------------")
         //setFotos(photoFile)
        // console.log(fotos)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function handleConfirmAds({ name, description, price }: FormData) {
    const userPhotoUploadFormm = new FormData();

    try {
      const data = await api.post('/products', { name, description, accept_trade, price, is_new, payment_methods })

      userPhotoUploadFormm.append('product_id', data.data.id);
      if (productImage) {
        userPhotoUploadFormm.append('images', productImage);
      }

      await api.post('/products/images', userPhotoUploadFormm, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setPayment_methods([])
      reset()
      navigation.navigate('home')

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possivel criar o produto. Tente novamente mais tarde.'
      console.log(title)
    }
  }

  function isNew(status: boolean) {
    setIs_new(!status)
    console.log(status)
  }

  return (
    <Container>
      <ContainerScrollView>
        <ContainerPadding>

          <HeaderOptions
            showBackIcon={true}
            text='Criar anúncio'
            navigateCreate={false}
          />

          <Title>Imagens</Title>
          <Text>Escolha até 3 imagens para mostrar o quanto o seu produto é incrível!</Text>



          <ContainerAddPhoto>
            {fotos.map((foto, index) => (
              <PreviewPhoto  key={index}>
                <Photo source={{uri: foto}}/>
                <RemovePhoto onPress={() => console.log(index)}></RemovePhoto>
              </PreviewPhoto>
            ))} 


           <AddPhoto onPress={handleOpenGalery} >
              <Icon name='plus' />
            </AddPhoto>

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
              <RadioCicle onPress={() => isNew(true)}>
                {
                  is_new ?
                    <IconRadio isTrue={is_new} name='radio-button-off-outline' /> :
                    <IconRadio name='radio-button-on-outline' />
                }
              </RadioCicle>
              <RadioText>Produto novo</RadioText>
            </RadioOption>

            <RadioOption>
              <RadioCicle onPress={() => isNew(false)}>
                {
                  !is_new ?
                    <IconRadio isTrue={!is_new} name='radio-button-off-outline' /> :
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
          onPress={() => navigation.navigate('home')}
        />
        <Button
          text='Avançar'
          type='BLACK'
          size='48'
          onPress={handleSubmit(handleConfirmAds)}
        />
      </ViewButtonOption>
    </Container>
  );
}