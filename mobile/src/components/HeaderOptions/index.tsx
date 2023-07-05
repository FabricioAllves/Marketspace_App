import React from 'react';
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    IconWrapperLeft,
    IconWrapperRight,
    Icon,
    Title
} from './styles';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

type Props = {
    showBackIcon?: Boolean;
    showEditIcon?: Boolean;
    nameIcon?: string
    text?: string;
    navigateCreate?: Boolean;
}

export function HeaderOptions({ showBackIcon, showEditIcon, nameIcon, text, navigateCreate }: Props) {
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    return (
        <Container>
            {showBackIcon && (
                <IconWrapperLeft onPress={navigation.goBack}>
                    <Icon name='arrow-left' />
                </IconWrapperLeft>
            )}

            <Title>{text}</Title>

            {showEditIcon && (
                <IconWrapperRight onPress={() => navigateCreate === true ? navigation.navigate('CreateAds') : () => navigation.goBack()}>
                    <Icon name={nameIcon} />
                </IconWrapperRight>
            )}
        </Container>
    );
}