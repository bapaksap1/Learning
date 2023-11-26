import React from "react";
import styled from "styled-components";
import H2 from "../component/Font/H2";
import H1 from "../component/Font/H1";
import P from "../component/Font/P";
import PictureSlider from "../component/PictureSlider";
import Badge from "../component/Badge";
import pictureSlider from "../component/PictureSlider";
import {PictureSlide} from "../utils/constants/project";

const Detail = () => {
  return (
    <Container>
      <Content>
        <ProjectPicture>
          <PictureSlider pictures={PictureSlide} />
        </ProjectPicture>
        <Description>
          <Title>
            <H1 label={"Internet Banking Back Office"} />
            <Subtitle>
              <H2 label="Digital Banking" /> <H2 label={"|"} />{" "}
              <H2 label="Frontend Developer" />
            </Subtitle>
          </Title>
          <P
            lineHeight={1.5}
            label="Back office is made up of personnel who support the operations of a company but do not directly interact with customers."
          />
          <div style={{ display: "flex", gap: "10px" }}>
            <Badge tag="React" />
            <Badge tag="Typescript" />
            <Badge tag="React" />
            <Badge tag="React" />
            <Badge tag="React" />
          </div>
        </Description>
      </Content>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  //background-color: red;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  //background-color: blue;
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
`;

const ProjectPicture = styled.div`
  width: 600px;
  height: 600px;
  //background-color: green;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  //background-color: green;
  padding: 20px;
  width: 650px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
