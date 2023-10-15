import React from "react";
import { TFont } from "../../../types/font.type";
import styled from "styled-components";

const H1: React.FC<TFont> = (props) => {
  return <Font>{props.label}</Font>;
};

const Font = styled.p`
  font-weight: bold;
  font-size: 50px;
  margin: 0;
  padding: 0;
  line-height: 0.9;
`;
export default H1;
