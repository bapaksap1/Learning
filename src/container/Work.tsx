import React from "react";
import styled from "styled-components";
import Navigation from "../component/Navigation";
import { NavMenu } from "../utils/constants/menu";
import SimpleSlider from "../component/Slider";
import { project } from "../utils/constants/project";

const Work = () => {
  return (
    <Container>
      <Navigation item={NavMenu} />
      <SimpleSlider cardContent={project} card cardDisplay={"vertical"}/>
    </Container>
  );
};

export default Work;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 90px 0 50px;
  justify-content: center;
  box-sizing: border-box;
  height: 100vh;
`;
