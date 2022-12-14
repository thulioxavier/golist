import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const InputContent = styled.View`   
    display: flex;
    flex-direction: row;
    max-width: ${({ maxWidth }) => maxWidth};
    align-items: center;
    justify-content: center;
    background-color: #F2F4F5;
    height: 45px;
    border-radius: 3px;

    margin-bottom: 10px;
    margin-top: 5px;
`;

export const IconContent = styled.View`
    display: flex;
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
`;

export const SecureButton = styled(TouchableOpacity)`
    display: flex;
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
`;

export const Input = styled(TextInput)`
    flex: 1;
    height: 35px;
    padding: 5px 10px;
    font-size: 16px;
`;