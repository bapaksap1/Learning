import React from 'react'
import Navbar from '../component/Navbar'
import styled from 'styled-components'

const Home = () => {
  return (
    <div>
      <Navbar item={["Work", "About Me", "Blog", "Content"]} />
      <Huruf>Berat</Huruf>
    </div>
  )
}

export default Home

const Huruf = styled.p`
  color: ${({theme}) => theme.colors};
`