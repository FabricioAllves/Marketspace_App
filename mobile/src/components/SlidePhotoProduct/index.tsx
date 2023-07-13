import React from 'react';

import {
  PhotoProductAnun,
  Active,
  Deactivated,
  Photos
} from './styles';
import { api } from '@services/api';
import { Loading } from '@components/Loading';

type Props = {
  data: string
  isActive?: boolean
}

export function SlidePhotoProduct({ data, isActive = false }: Props) {
  return (
    <Photos>
      <Active>
        <PhotoProductAnun source={{ uri: `${api.defaults.baseURL}/images/${data}` }} resizeMode='cover' />
      </Active>

      {
        isActive&& (
          <Deactivated>

          </Deactivated>
        )
      }
    </Photos>
  )
}