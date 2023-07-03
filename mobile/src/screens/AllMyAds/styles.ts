import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px 24px 0px 24px;
  background-color: ${({ theme }) => theme.Colors.GRAY_200};
`;

export const HeaderInfoAndFilter = styled.View`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.Colors.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  flex:1;
`;

export const Filter = styled.View`
  width: 140px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.Colors.GRAY_300};
  border-radius: 8px;
`;