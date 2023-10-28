import React from "react";
import styled from "styled-components";
import { TNavbar } from "../Navbar/Tnavbar";
import {darkGrey} from "../../utils/constants/color";

const Navigation: React.FC<TNavbar> = (props) => {
  return (
    <Container>
      <link
        href="https://fonts.cdnfonts.com/css/itim-2"
        rel="stylesheet"
      ></link>
      {props.item.map((e) => (
        <Menu key={e} $selected={e}>
          {e}
        </Menu>
      ))}
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0;
  gap: 10px;
`;

type Tbutton = {
    $selected: string;
};

const Menu = styled.button<Tbutton>`
  font-family: Itim;
  font-size: 25px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${darkGrey};
  &:hover {
    text-decoration: ${({ $selected }) => ($selected ? "underline" : "none")};
    color: ${({$selected}) => ($selected ? "black" : "none")};
  }
  
`;
