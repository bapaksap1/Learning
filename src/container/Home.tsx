import React from "react";
import styled from "styled-components";
import ProfileBox from "../component/ProfileBox/ProfileBox";
import Navigation from "../component/Navigation";
import { NavMenu } from "../utils/constants/menu";
import SimpleSlider from "../component/Slider";
import { project } from "../utils/constants/project";


const Home = () => {
  return (
    <Container>
      <ProfileBox />
      <Navigation item={NavMenu} />
      <SimpleSlider cardContent={project} card />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 100px 90px 0 50px;
`;
