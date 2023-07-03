import { Button } from '@components/Button';
import React, { useState } from 'react';

import {
  Container,
  ContainerOpacity,
  ContentModal,
  Header,
  TitleHeader,
  ButtonIcon,
  Icon,
  ContainerStatusUsed,
  Used,
  StatusProduct,
  TextOptionDescription,
  ContainerCondition,
  Trade,
  AcceptTrade,
  ViewButtonOption
} from './styles';
import { RadioSelect } from '@components/RadioSelect';

type Props = {
  setVisible: () => any;
}

export function ModalFilter({ setVisible }: Props) {
  const [troca, setTroca] = useState(false)
  const [is_New, setIs_new] = useState(true)

  function isNew(status: boolean){
    setIs_new(status)
  }

  return (
    <Container>
      <ContainerOpacity onPress={setVisible} />
      <ContentModal>
        <Header>
          <TitleHeader>Filtrar anúncios</TitleHeader>
          <ButtonIcon onPress={setVisible}>
            <Icon name={'x'} />
          </ButtonIcon>
        </Header>

        <ContainerCondition>
          <TextOptionDescription>Condição</TextOptionDescription>

          <ContainerStatusUsed>
            <Used selected={is_New} onPress={() => isNew(true)}>
              <StatusProduct>Novo</StatusProduct>
            </Used>

            <Used selected={!is_New} onPress={() => isNew(!true)}>
              <StatusProduct>Usado</StatusProduct>
            </Used>
          </ContainerStatusUsed>

        </ContainerCondition>

        <TextOptionDescription>Aceita troca?</TextOptionDescription>
        <Trade>
          <AcceptTrade
            value={troca}
            onValueChange={(valueSelected) => setTroca(valueSelected)}
          />
        </Trade>

        <TextOptionDescription>Meios de pagamento aceitos</TextOptionDescription>

        <RadioSelect />

        <ViewButtonOption>
          <Button
            text='Resetar filtros'
            type='GRAY'
            size='48'
            onPress={() => { }}
          />
          <Button
            text='Aplicar filtros'
            type='BLACK'
            size='48'
            onPress={() => { }}
          />
        </ViewButtonOption>
      </ContentModal>
    </Container>
  )

}