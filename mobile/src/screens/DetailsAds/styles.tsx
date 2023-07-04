import styled from 'styled-components/native';
import {FontAwesome} from '@expo/vector-icons'

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator:false
}))`
  flex: 1;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.Colors.GRAY_200};
`;

export const ContainerPadding = styled.View`
  padding: 0px 24px 0px 24px;
`;

export const HeaderPhotoAndUsername = styled.View`
  flex-direction: row;
  margin-bottom: 26px;
  margin-top: 26px;
  align-items: center;
`;

export const UserPhoto = styled.Image`
  width: 30px;
  height: 30px;
  border-color: ${({ theme }) => theme.Colors.BLUE_LIGHT};
  border-width: 1px;
  border-radius: 22.5px;
  margin-right: 10px;
  padding-right: 8px;
`;

export const NameUser = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.Colors.GRAY_700};
`;

export const IsNew =  styled.View`
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.Colors.GRAY_300};
  width: 50px;
  height: 20px;
  align-items: center;
  justify-content: center;
`;

export const StatusProduct = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.AA}px;
  color: ${({ theme }) => theme.Colors.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-transform: uppercase;
`;

export const NameProductAndValue =  styled.View`
  height: 26px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 8px;
`;

export const NameProduct =  styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XO}px;
  color: ${({ theme }) => theme.Colors.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ValueCifrao =  styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.Colors.BLUE_LIGHT};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ValueProduct =  styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XO}px;
  color: ${({ theme }) => theme.Colors.BLUE_LIGHT};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const AboutProduct =  styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.Colors.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  line-height: 23px;
`;


export const TextBold =  styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.Colors.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-top: 24px;
  margin-bottom: 10px;
`;

export const TextSimples =  styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.Colors.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const PaymentMethod =  styled.View`
  padding-bottom: 27px;
`;

export const MethodsContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;

export const IconMethod = styled(FontAwesome).attrs(() => ({
  size: 20,
}))`
  margin-right : 10px;
  color: ${({ theme }) => theme.Colors.GRAY_600};
`;

export const FooterButton =  styled.View`
  flex-direction: row;
  background-color: white;
  height: 82px;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const ContainerValue =  styled.View`
  width: 50%;
`;

export const Cifrao =  styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.Colors.BLUE_LIGHT};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Value =  styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.Colors.BLUE_LIGHT};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;


