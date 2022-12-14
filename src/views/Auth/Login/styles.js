import { Text } from "react-native";
import styled from "styled-components";

export const SectionText = styled(Text)`
  width: 100%;
  font-size: 30px;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};

  margin-top: 10px;
  margin-bottom: 20px;
`;
