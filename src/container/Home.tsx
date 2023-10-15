import React from 'react'
import styled from 'styled-components'
import ProfileBox from "../component/ProfileBox/ProfileBox";

const Home = () => {
  return (
    <Container>
      <ProfileBox />
    </Container>
  )
}

export default Home

const Huruf = styled.p`
  color: ${({theme}) => theme.colors};
`

const Container = styled.div`
  padding: 0 90px 0 50px;
`