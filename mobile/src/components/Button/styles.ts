import { TouchableOpacity } from 'react-native';
import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons'

type TypeColors = {
  type: 'BLUE' | 'BLACK' | 'GRAY'
  size?: '48' | '100' | 'FULL';
}

export const Container = styled.TouchableOpacity<TypeColors>`
  height: 42px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  flex-direction: row;

  ${({size}) => size === 'FULL' && css`
  flex: 1;
  `}
  ${({size}) => size === '48' && css`
    width: 48%;
  `}
  ${({size}) => size === '100' && css`
    width: 100%;
  `}

  ${({type}) => type ===  'BLACK' && css`
  background-color: ${({ theme }) => theme.Colors.GRAY_700};
  `}

  ${({type}) => type ===  'BLUE' && css`
  background-color: ${({ theme }) => theme.Colors.BLUE_LIGHT};
  `}

  ${({type}) => type ===  'GRAY' && css`
  background-color: ${({ theme }) => theme.Colors.GRAY_300};
  `}
`;

export const TextButton = styled.Text<TypeColors>`
  color: ${({ theme, type }) => type === 'GRAY' ? theme.Colors.GRAY_600 : theme.Colors.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Icon = styled(Feather).attrs<TypeColors>(({ theme, type }) => ({
  size: 20,
  color: type === 'GRAY' ? theme.Colors.GRAY_700 : theme.Colors.GRAY_100
}))`
  margin-right : 8px;
`;