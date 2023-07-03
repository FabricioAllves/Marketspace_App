import React from 'react';

import {
    PhotoProductAnun,
} from './styles';

type Props = {
    data: string
}

export function SlidePhotoProduct({ data }: Props) {
    return (
        <PhotoProductAnun source={{ uri: data }} resizeMode='cover' />
    );
}