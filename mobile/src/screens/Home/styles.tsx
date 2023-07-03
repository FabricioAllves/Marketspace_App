import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'



export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator:false
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.GRAY_200};
`;

export const Group = styled.View`
  padding: 40px 24px 0 24px;
  background-color: ${({ theme }) => theme.Colors.GRAY_200};
`;

export const Header = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  height: 45px;
  align-items: center;
  padding-right: 25px;
`;

export const UserPhoto = styled.Image`
  width: 45px;
  height: 45px;
  border-color: ${({ theme }) => theme.Colors.BLUE_LIGHT};
  border-width: 2px;
  border-radius: 22.5px;
  margin-right: 10px;
`;

export const Greeting = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const NameUser = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MG}px;
  color: ${({ theme }) => theme.Colors.GRAY_700};
`;

export const Sell = styled.View`
  margin-top: 34px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.Colors.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 12px;
`;

export const Info = styled.TouchableOpacity`
  width: 100%;
  height: 66px;
  padding: 0 16px 0 16px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.Colors.BLUE_OPACITY};
`;

export const Active = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.Colors.blue};
`;

export const Counter = styled.View`
  margin-left: 16px;
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.Colors.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XO}px;
`;

export const ActivityAnun = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.Colors.GRAY_600};
`;

export const ButtonLink = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextMyAnunLink = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.Colors.blue};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-right: 8px;
`;

export const Content = styled.View`
  margin-top: 32px;
`;

export const Search = styled.View`
  width: 100%;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.Colors.GRAY_100};
  align-items: center;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  height: 45px;
  padding: 12px 0 12px 16px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MG}px;
  color: ${({ theme }) => theme.Colors.GRAY_400};
`;

export const ButtonIcon = styled.TouchableOpacity`
  padding: 10px 14px;
`;

export const Divider = styled.View`
  height: 18px;
  width: 1px;
  background-color: ${({ theme }) => theme.Colors.GRAY_400};
`;

export const IconInput = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.Colors.GRAY_600};
`;

export const Cards = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 16px;
  margin-top: 14px;
`;
