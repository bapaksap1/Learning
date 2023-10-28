import React, { FC, useState } from "react";
import styled from "styled-components";
import { Photo, Biodata } from "../../utils/constants/menu";
import { TNavbar } from "./Tnavbar";

const Navbar: FC<TNavbar> = (props) => {
  const [selected, setSelected] = useState("Home");

  const selectButton = () => {};
  return (
    <Container>
      <link
        href="https://fonts.cdnfonts.com/css/itim-2"
        rel="stylesheet"
      ></link>
      <ProfileContainer>
        <ProfilePhoto src={Photo} />
        <NameContainer>
          <Name>{Biodata.name}</Name>
          <Occupation>{Biodata.role}r</Occupation>
        </NameContainer>
      </ProfileContainer>
      <MenuContainer>
        {props.item.map((e) => (
          <Menu key={e} $selected={e}>
            {e}
          </Menu>
        ))}
      </MenuContainer>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  padding: 30px 90px 30px 90px;
  justify-content: space-between;
  background-color: #fff;
`;
const ProfileContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ProfilePhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.p`
  color: black;
  margin: 0;
`;

const Occupation = styled.p`
  font-style: normal;
  margin: 0;
`;
const MenuContainer = styled.div`
  display: flex;
  gap: 40px;
`;

type Tbutton = {
  $selected: string;
};

const Menu = styled.button<Tbutton>`
  font-family: Itim;
  font-size: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #7D7B7B;
  &:hover {
    text-decoration: ${({ $selected }) => ($selected ? "underline" : "none")};
    color: ${({$selected}) => ($selected ? "black" : "none")};
  }
`;
