import styled from 'styled-components/native';

type Props = {
  isNew: boolean;
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  max-width: 48%;
  height: 150px;
  border-radius: 6px;
  margin: 5px;
`;

export const ImgProduct = styled.Image`
  height: 100px;
  width: 100%;
  border-radius: 6px;
`;

export const DescriptionProd = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.Colors.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Cifrao = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.Colors.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ValueProduct = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MG}px;
  color: ${({ theme }) => theme.Colors.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const UserPhoto = styled.Image`
  width: 26px;
  height: 26px;
  border-color: white;
  border-width: 1px;
  border-radius: 22.5px;
  margin-right: 10px;
  position: absolute;
  top: 2.5px;
  left: 2.5px;
`;

export const Used = styled.View<Props>`
  border-radius: 9999px;
  background-color: ${({ theme, isNew }) => isNew ? theme.Colors.blue : theme.Colors.GRAY_600};
  width: 48px;
  height: 17px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4px;
  top: 4px;
`;

export const StatusProduct = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.AA}px;
  color: white;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-transform: uppercase;
`;