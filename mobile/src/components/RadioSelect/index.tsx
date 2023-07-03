import React, { useState } from 'react';
import { useAuth } from '@hooks/useAuth';

import {
  ViewCheckBox,
  CheckBox,
  IconCheckBox,
  TextCheckBox
} from './styles';


export function RadioSelect() {
  const {payment_methods, setPayment_methods} = useAuth();

  const [ViewIcon, setViewIcon] = useState(false);

  function handlePressSelected(value: string) {
    const isSelected = payment_methods.includes(value);

    if (isSelected) {
      // Remove o valor do array de valores selecionados
      const updatedValues = payment_methods.filter((v) => v !== value);
      setPayment_methods(updatedValues)
      setViewIcon(!ViewIcon)
      console.log(payment_methods)

    } else {
      // Adiciona o valor ao array de valores selecionados
      const updatedValues = [...payment_methods, value];
      setPayment_methods(updatedValues)
      setViewIcon(!ViewIcon)
    }
  }

  return (
    <>
      <ViewCheckBox>
        <CheckBox onPress={() => handlePressSelected('boleto')}>
          {payment_methods.includes('boleto') ?
            <IconCheckBox name='check' /> : null
          }
        </CheckBox>
        <TextCheckBox>Boleto</TextCheckBox>
      </ViewCheckBox>

      <ViewCheckBox>
        <CheckBox onPress={() => handlePressSelected('pix')}>
          {payment_methods.includes('pix') ?
            <IconCheckBox name='check' /> : null
          }
        </CheckBox>
        <TextCheckBox>Pix</TextCheckBox>
      </ViewCheckBox>

      <ViewCheckBox>
        <CheckBox onPress={() => handlePressSelected('cash')}>
          {payment_methods.includes('cash') ?
            <IconCheckBox name='check' /> : null
          }
        </CheckBox>
        <TextCheckBox>Dinheiro</TextCheckBox>
      </ViewCheckBox>

      <ViewCheckBox>
        <CheckBox onPress={() => handlePressSelected('card')}>
          {payment_methods.includes('card') ?
            <IconCheckBox name='check' /> : null
          }
        </CheckBox>
        <TextCheckBox>Cartão de Crédito</TextCheckBox>
      </ViewCheckBox>

      <ViewCheckBox>
        <CheckBox onPress={() => handlePressSelected('deposit')}>
          {payment_methods.includes('deposit') ?
            <IconCheckBox name='check' /> : null
          }
        </CheckBox>
        <TextCheckBox>Depósito Bancário</TextCheckBox>
      </ViewCheckBox>
    </>
  );
}