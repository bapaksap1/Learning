import React from "react";
import styled from "styled-components";
import instagram from "../../icons/instagram.svg";
import whatsapp from "../../icons/wa.svg";
import linkedin from "../../icons/linkedin.svg";
import github from "../../icons/github.svg";
import Button from "../Button";
import H1 from "../Font/H1";
import H2 from "../Font/H2";
import { Photo, Biodata } from "../../utils/constants/menu";

const ProfileBox = () => {
  const onClick = () => {
    console.log("a");
  };
  return (
    <Container>
      <Description>
        <H2 label="Hello, I'm" />
        <H1 label="Naufal Fakhri" />
        <H2 label="Frontend Developer" />
        <SocialMedia>
          <img src={instagram} alt="instagram" />
          <img src={whatsapp} alt="wa" />
          <img src={linkedin} alt="linkedin" />
          <img src={github} alt="github" />
        </SocialMedia>
        <ButtonContaier>
          <Button
            onClick={onClick}
            label={"Get My Resume"}
            variant={"primary"}
          />
          <Button
            onClick={onClick}
            label={"See My Resume"}
            variant={"secondary"}
          />
        </ButtonContaier>
        <div className="content"></div>
      </Description>
      <Description>
        <PP src={Photo} alt="pic" />
      </Description>
    </Container>
  );
};

export default ProfileBox;

const Container = styled.div`
  border: 1.5px outset;
  height: 400px;
  background-color: #fdfdfd;
  display: flex;
  justify-content: space-around;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  > img {
    width: 45px;
    height: 45px;
  }
`;
const ButtonContaier = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const PP = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
