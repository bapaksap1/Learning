import React from "react";
import { TFont } from "../../../types/font.type";
import styled from "styled-components";

const P: React.FC<TFont> = (props) => {
  return <Font $fontColor={props.color}>{props.label}</Font>;
};

type TStyle = {
  $fontColor?: string;
};

P.defaultProps = {
    label: "",
    color: "black"
}

const Font = styled.p<TStyle>`
  font-size: 18px;
  margin: 0;
  padding: 0;
  line-height: 0.9;
  color: ${({ $fontColor }) => $fontColor};
`;
export default P;
