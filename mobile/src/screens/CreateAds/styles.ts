import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

type Props = {
  isTrue: boolean;
}

export const Container = styled.View`
  flex: 1;
  
  background-color: ${({ theme }) => theme.Colors.GRAY_200};
`;

export const ContainerPadding = styled.View`
  padding: 20px 24px 0 24px;
`;

export const ContainerScrollView = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false
}))`
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.Colors.GRAY_600};
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.Colors.GRAY_500};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.Colors.GRAY_400};
  font-size: 24px;
`;

export const ContainerAddPhoto = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const AddPhoto = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.Colors.GRAY_300};
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 6px;
  margin-top: 16px;
  margin-bottom: 32px;
  margin-right: 8px;
`;

export const Photo = styled.Image`
  background-color: ${({ theme }) => theme.Colors.GRAY_300};
  width: 100px;
  height: 100px;
  border-radius: 6px;
`;

export const PreviewPhoto = styled.View`
  background-color: ${({ theme }) => theme.Colors.GRAY_300};
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 6px;
  margin-top: 16px;
  margin-bottom: 32px;
  margin-right: 8px;
`;

export const RemovePhoto = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.Colors.GRAY_600};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: 0px;
  right: 0;
`;

export const ContainerInputs = styled.View`
  margin-top: 6px;
  height: 222px;
  justify-content: space-between;
`;

export const InputTextArea = styled.TextInput.attrs(() => ({
  placeholderTextColor: '#9F9BA1'
}))`
  height: 160px;
  background-color: ${({ theme }) => theme.Colors.GRAY_100};
  margin-top: 16px;
  padding: 12px 48px 12px 16px;
  vertical-align: top;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MG}px;
`;

export const ContainerInputValue = styled.View`
  border-radius: 6px;
  height: 45px;
  background-color: ${({ theme }) => theme.Colors.GRAY_100};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const TextInput = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.Colors.GRAY_700};
  padding-left: 5px;
`;

export const Trade = styled.View`
 flex-direction: row;
 padding-bottom: 10px;
 margin-top: -14px;
`;

export const AcceptTrade = styled.Switch.attrs(() => ({
  trackColor: { false: '#ccc', true: '#647AC7' },
  thumbColor: '#364D9D',
}))`
`;

export const ViewButtonOption = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.Colors.GRAY_100};
`;

export const ContainerRadioSelect = styled.View`
 flex-direction: row;
 margin-top: 16px;
 margin-bottom: 33px;
`;

export const RadioOption = styled.View`
 flex-direction: row;
 margin-right: 23px;
 align-items: center;
`;

export const RadioCicle = styled.TouchableOpacity`
  margin-right: 12px;
`;

export const IconRadio = styled(Ionicons)<Props>`
  color: ${({ theme, isTrue }) => isTrue ? theme.Colors.GRAY_400 : theme.Colors.BLUE_LIGHT};
  font-size: 25px;
`;

export const RadioText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MG}px;
  color: ${({ theme }) => theme.Colors.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;


