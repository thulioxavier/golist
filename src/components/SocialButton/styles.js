import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const ButtonRow = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 50px;
`;

export const Button = styled(TouchableOpacity)`
  flex: 1;
  ${({ type, bg }) =>
    type === "clean"
      ? `
            background-color: #fff;
            border: 2px solid #181818;
        `
      : `
            background-color: ${bg};
        `}
  height: 45px;
  border-radius: 3px;

  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;

  padding: 5px;
`;

export const ButtonSocial = styled(TouchableOpacity)`
  ${({ type, bg }) =>
    type === "clean"
      ? `
            background-color: #fff;
            border: 2px solid ${bg};
        `
      : `
            background-color: ${bg};
        `}
  height: 45px;
  width: 45px;
  border-radius: 3px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 5px;
`;

export const SocialIcon = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;

  /* border-right-color: #f0f0f0;
  border-right-width: 1px;
  border-right-style: solid; */
  padding: 2px;
  border-top: 0;
`;

export const ButtonLabel = styled(Text)`
  font-weight: bold;
  font-size: 15px;
  color: ${({color}) => (color ? color : '#f0f0f0')};
`;
