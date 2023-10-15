import React from 'react';
import {TFont} from "../../../types/font.type";
import styled from "styled-components";


const H2:React.FC<TFont> = (props) => {
    return (
        <Font>
            {props.label}
        </Font>
    );
};

const Font = styled.p`
  font-weight: lighter;
  font-size: 40px;
  margin: 0;
  padding: 0;
  line-height: 0.9;
`
export default H2;