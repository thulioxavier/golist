import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const AreaView = styled.SafeAreaView``;

export const Container = styled.View`
  padding: 0 24px;
  height: 100%;
  ${({ center }) =>
    center
      ? `           
                justify-content: center;
                align-items: center;
            `
      : null}
`;
