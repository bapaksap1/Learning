import React from "react";
import { TFont } from "../../../types/font.type";
import styled from "styled-components";

const P: React.FC<TFont> = (props) => {
  return <Font $fontColor={props.color} $lineHeight={props.lineHeight}>{props.label}</Font>;
};

type TStyle = {
  $fontColor?: string;
  $lineHeight?: string | number;
};

P.defaultProps = {
    label: "",
    color: "black",
    lineHeight: 0.9
}

const Font = styled.p<TStyle>`
  font-size: 18px;
  margin: 0;
  padding: 0;
  line-height:  ${({ $lineHeight }) => $lineHeight};;
  color: ${({ $fontColor }) => $fontColor};
`;
export default P;
