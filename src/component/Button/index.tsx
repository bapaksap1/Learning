import React, { FC } from "react";
import styled from "styled-components";
import { Tbutton } from "./Tbutton";

const Button: FC<Tbutton> = (props) => {
  return (
    <div>
      <ButtonContainer className={props.variant} onClick={props.onClick}>
        {props.label}
      </ButtonContainer>
    </div>
  );
};

export default Button;

Button.defaultProps = {
  variant: "primary",
  label: "Click Here",
};

const ButtonContainer = styled.button`
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  &.primary {
    background-color: #3a3737;
    -webkit-text-stroke-color: black;
    color: white;
    border: none;
  }
  &.secondary {
    background-color: #fff;
    -webkit-text-stroke-color: black;
    color: black;
    border: solid 1px  black;
  }
`;
