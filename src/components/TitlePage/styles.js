import { Text } from "react-native";
import styled from "styled-components";

export const Title = styled(Text)`
    font-size: ${({size}) => (size ? size : '24px')};
    font-weight: bold;
    color: #181818;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
`;