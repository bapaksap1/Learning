import React, { FC, useState } from "react";
import styled from "styled-components";
import { Photo, Biodata } from "../../utils/constants/menu";
import { TNavbar } from "./Tnavbar";
import { useNavigate } from "react-router-dom";

const Navbar: FC<TNavbar> = (props) => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("Work");

  const selectButton = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <Container>
      <link
        href="https://fonts.cdnfonts.com/css/itim-2"
        rel="stylesheet"
      ></link>
      <ProfileContainer onClick={() => navigate("/")}>
        <ProfilePhoto src={Photo} />
        <NameContainer>
          <Name>{Biodata.name}</Name>
          <Occupation>{Biodata.role}r</Occupation>
        </NameContainer>
      </ProfileContainer>
      <MenuContainer>
        {props.item.map((e) => (
          <Menu
            key={e}
            $selected={e}
            onClick={() => selectButton(e)}
            $onActive={selectedMenu === e}
          >
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
  box-sizing: border-box;
  justify-content: space-between;
  background-color: #fff;
  position: fixed;
  width: 100%;
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
  $onActive: boolean;
};

const Menu = styled.button<Tbutton>`
  font-family: Itim;
  font-size: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ $onActive }) => ($onActive ? "black" : "#7d7b7b")};
  text-decoration: ${({ $onActive }) => ($onActive ? "underline" : "none")};
  &:hover {
    text-decoration: ${({ $selected }) => ($selected ? "underline" : "none")};
    color: ${({ $selected }) => ($selected ? "black" : "none")};
  }
  &:active {
    color: ${({ $onActive }) => ($onActive ? "red" : "#7d7b7b")};
    text-decoration: ${({ $onActive }) => ($onActive ? "underline" : "none")};
  }
  & {
  }
`;
