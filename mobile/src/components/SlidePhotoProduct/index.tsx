import React from 'react';

import {
    PhotoProductAnun,
} from './styles';
import { api } from '@services/api';
import { Loading } from '@components/Loading';

type Props = {
    data: string
    teste?: false
}

export function SlidePhotoProduct({ data, teste }: Props) {
    return (
        <>
        {
            teste ?
            (
                <Loading />
            ) : (
                <PhotoProductAnun source={{ uri: `${api.defaults.baseURL}/images/${data}` }} resizeMode='cover' />
            )
        }
        </>
    );
}