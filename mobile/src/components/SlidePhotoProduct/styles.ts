import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Photos = styled.View`
  width: ${windowWidth}px;
  height: 280px;
`;

export const PhotoProductAnun = styled.Image`
  width: ${windowWidth}px;
  height: 280px;
`;

export const Deactivated = styled.View`
  width: ${windowWidth}px;
  height: 280px;
  background-color: rgba(0,0,0, 0.5);
  position: absolute;
`;

export const Active = styled.View`
  width: ${windowWidth}px;
  height: 280px;
  background-color: red;
  
`;


