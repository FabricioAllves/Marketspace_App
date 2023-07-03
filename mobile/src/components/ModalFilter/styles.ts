import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

type ButtonProps = {
  selected: true | false;
}

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.6);
`;

export const ContainerOpacity = styled.TouchableOpacity`
  flex: 1;
`;

export const ContentModal = styled.View`
  height: 75%;
  padding : 15px 24px 0 24px;
  background-color: white;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${({ theme }) => theme.Colors.GRAY_200};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XO}px;
  color: ${({ theme }) => theme.Colors.GRAY_700};
`;

export const ButtonIcon = styled.TouchableOpacity`
  padding: 10px;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.Colors.GRAY_400};
`;

export const ContainerCondition = styled.View`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ContainerStatusUsed = styled.View`
  flex-direction: row;
`;

export const TextOptionDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.Colors.GRAY_600};
  padding-bottom: 12px;
`;

export const Used =  styled.TouchableOpacity<ButtonProps>`
  border-radius: 9999px;
  background-color: ${({ theme, selected }) => selected === true ? theme.Colors.blue : theme.Colors.GRAY_400};
  width: 76px;
  height: 28px;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
`;

export const StatusProduct = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: white;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-transform: uppercase;
`;

export const Trade = styled.View`
 flex-direction: row;
 padding-bottom: 10px;
 margin-top: -14px;
`;

export const AcceptTrade = styled.Switch.attrs(() => ({
  trackColor: {false: '#ccc', true: '#647AC7'},
  thumbColor: '#364D9D',
}))`
`;

export const ViewButtonOption = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 65px;
`;
