import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(ScrollView).attrs(() => ({
    showsVerticalScrollIndicator:false
}))`
    flex: 1;
    background-color: ${({ theme }) => theme.Colors.GRAY_100};
`;

export const ContainerLogin = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.Colors.GRAY_200};
    align-items: center;
    padding: 0 48px 68px 48px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    z-index: 99;
`;

export const Logo = styled.Image`
    margin-top: 70px;
    margin-bottom: 20px;
`;

export const LogoText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme }) => theme.Colors.GRAY_700};
    margin-bottom: 2px;
`;

export const SubText = styled.Text`
    color: ${({ theme }) => theme.Colors.GRAY_500};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    margin-bottom: 77px;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Form = styled.View`
    width: 100%;
    height: 105px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
`;

export const TitleForm = styled.Text`
    color: ${({ theme }) => theme.Colors.GRAY_600};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    padding-bottom: 16px;
`;

export const ContainerCreateLogin = styled.View`
    flex: 1;
    padding: 80px 48px 0px 48px;
    align-items: center;
    position: relative;
    top: -20px;
`;

export const ContainerButton = styled.View`
    width: 100%;
`;
 
