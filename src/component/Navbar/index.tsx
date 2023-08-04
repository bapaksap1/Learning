import React, { FC } from 'react'
import styled from 'styled-components'

type TNavbar = {
  item: string[],
}

const Navbar: FC<TNavbar> = (props) => {
  return (
    <Container>
      <link href="https://fonts.cdnfonts.com/css/itim-2" rel="stylesheet"></link>
      <ProfileContainer>
        <ProfilePhoto src='OKQU7M0.jpg' />
        <NameContainer>
          <Name>Naufal Fakhri</Name>
          <Occupation>Frontend Developer</Occupation>
        </NameContainer>
      </ProfileContainer>
      <MenuContainer>
        {props.item.map((e) => 
          <Menu>{e}</Menu>
        )}
      </MenuContainer>
    </Container>
  ) 
}

export default Navbar

const Container = styled.div`
  display: flex;
  padding: 5px 90px 5px 50px;
  justify-content: space-between;
  background-color: red;
`
const ProfileContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const ProfilePhoto = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  justify-content: center;
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.p`
  color: black;
  margin: 0;
`

const Occupation = styled.p`
  font-style: normal;
  margin: 0;
`
const  MenuContainer = styled.div`
  display: flex;
  gap: 40px;
`

const Menu = styled.button`
  font-family: Itim;
  font-size: 20px;
  background-color: transparent;    
  border: none;
  outline: none;
  &:hover {
    text-decoration: underline;
  }
`