import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const ViewCheckBox = styled.View`
  flex-direction: row;
  margin-bottom: 11px;
  align-items: center;
`;

export const CheckBox =  styled.TouchableOpacity`
  width: 18px;
  height: 18px;
  background-color: ${({ theme }) => theme.Colors.GRAY_100};
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.Colors.GRAY_400};
`;

export const TextCheckBox = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MG}px;
  color: ${({ theme }) => theme.Colors.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  padding-left: 15px;
`;

export const IconCheckBox = styled(Feather)`
  font-size: 13px;
  color: white;
  padding: 3px;
  background-color: ${({ theme }) => theme.Colors.BLUE_LIGHT};
  border-radius: 2px;
  height: 20px;
  width: 20px;
`;