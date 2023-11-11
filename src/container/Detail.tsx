import React from "react";
import styled from "styled-components";
import H2 from "../component/Font/H2";
import H1 from "../component/Font/H1";
import P from "../component/Font/P";

const Detail = () => {
  return (
    <Container>
      <Content>
        <ProjectPicture>1</ProjectPicture>
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
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  //background-color: blue;
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 10px;
`;

const ProjectPicture = styled.div`
  width: 500px;
  height: 500px;
  //background-color: green;
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
