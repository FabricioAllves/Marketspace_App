import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;


export const PhotoProductAnun = styled.Image`
  width: ${windowWidth}px;
  height: 280px;
`;

