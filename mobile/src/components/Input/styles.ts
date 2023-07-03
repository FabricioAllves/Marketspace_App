import styled from "styled-components/native";
import { TextInput } from "react-native";
import {Feather} from '@expo/vector-icons'


export const Container = styled.View`
  height: 45px;
  width: 100%;
  flex-direction: row;
`;

export const InputText = styled(TextInput)`
  height: 45px;
  width: 100%;
  background-color: ${({ theme }) => theme.Colors.GRAY_100};
  border-color: ${({ theme }) => theme.Colors.GRAY_400};
  border-radius: 6px;
  color: ${({ theme }) => theme.Colors.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MG}px;
  padding: 12px 48px 12px 16px;
`;

export const ButtonEye = styled.TouchableOpacity`
  height: 45px;
  width: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  position: absolute;
  right: 0;
`;

export const IconButton = styled(Feather).attrs(({ theme}) => ({
  size: 20,
}))`
`;