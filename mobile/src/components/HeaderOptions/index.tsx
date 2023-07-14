import React from 'react';
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    ButtonIconWrapperLeft,
    ButtonIconWrapperRight,
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
    onPress: () => void;
}

export function HeaderOptions({ showBackIcon, showEditIcon, nameIcon, text, navigateCreate, ...rest }: Props) {
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    return (
        <Container>
            {showBackIcon && (
                    <ButtonIconWrapperLeft {...rest}>
                    <Icon name='arrow-left' />
                </ButtonIconWrapperLeft>
            )}

            <Title>{text}</Title>

            {showEditIcon && (
                <ButtonIconWrapperRight onPress={() => navigateCreate === true ? navigation.navigate('CreateAds') : () => navigation.goBack()}>
                    <Icon name={nameIcon} />
                </ButtonIconWrapperRight>
            )}
        </Container>
    );
}