import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex: 1;
  align-items: center;
  justify-content: center;
`;



export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.Colors.blue
  }))``;