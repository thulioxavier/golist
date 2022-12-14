import React from "react";
import { Text } from "react-native";
import * as S from './styles';
export const Container = ({ children, ...props }) => {

    return (
        <S.AreaView>
            <S.Container center={props.center}>
                {children}
            </S.Container>
        </S.AreaView>
    )
}