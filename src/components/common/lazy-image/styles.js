import styled, { css } from "styled-components/native";
import { Platform } from "react-native";

export const Small = styled.ImageBackground`
  width: 100%;
  min-height: 600px;
  max-height: 700px;
  ${Platform.select({
    android: css`
      margin: 8px 0;
    `
  })};
`;

export const Original = styled.Image`
  width: 100%;
  min-height: 600px;
  max-height: 700px;
  ${Platform.select({
    android: css`
      margin: 8px 0;
    `
  })};
`;
