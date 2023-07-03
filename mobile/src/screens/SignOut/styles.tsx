import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0,0,0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.Colors.GRAY_100};
  align-items: center;
  padding: 10px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  padding-top: 15px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XO}px;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 50px;
  padding-bottom: 10px;
`;