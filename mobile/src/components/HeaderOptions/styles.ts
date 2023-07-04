import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${({ theme }) => theme.Colors.GRAY_200};
`;

export const IconWrapperLeft = styled.TouchableOpacity`
  padding: 8px;
  position: absolute;
  left: 0;
`;

export const IconWrapperRight = styled.TouchableOpacity`
  padding: 8px;
  position: absolute;
  right: 0;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XO}px;
  color: ${({ theme }) => theme.Colors.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: black;
`;