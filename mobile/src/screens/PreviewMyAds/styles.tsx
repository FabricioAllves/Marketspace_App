import styled from 'styled-components/native';
import {FontAwesome} from '@expo/vector-icons'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.GRAY_200};
`;

export const Header = styled.View`
  height: 121px;
  padding-top: 36px;
  background-color: ${({ theme }) => theme.Colors.BLUE_LIGHT};
  align-items: center;
  justify-content: center;
`;

export const TitleHeader = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.Colors.GRAY_100};
  line-height: 30px;
`;

export const SubTitleHeader = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.Colors.GRAY_100};
`;

export const PhotosPreviewProducts = styled.Image`
  width: ${windowWidth}px;
  height: 280px;
`;

export const ContainerInfo = styled.View`
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
  padding-bottom: 30px;
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
  padding: 0px 24px 20px 24px;
  height: 120px;
  justify-content: space-around;
`;

export const ViewButtonOption = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.Colors.GRAY_100};
`;

