import React, { useState } from "react";
import styled from "styled-components";

type TPictureSLider = {
  pictures: string[];
  onClick?: "MouseEventHandler<HTMLImageElement> | undefined";
};
const PictureSlider: React.FC<TPictureSLider> = (props) => {
  const [Selected, setSelected] = useState("test1.jpeg");
  const selectButton = (picture: string) => {
    setSelected(picture);
  };
  return (
    <Container>
      <MainPicture src={Selected} />
      <PictureContainer>
        {props.pictures.map((e) => (
          <Picture
            src={e}
            $selected={e}
            $onActive={Selected === e}
            onClick={() => selectButton(e)}
          />
        ))}
      </PictureContainer>
    </Container>
  );
};

export default PictureSlider;

type TSelect = {
  $selected: string;
  $onActive: boolean;
};

const Container = styled.div`
  //background-color: magenta;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  border-radius: 10px;
`;
const MainPicture = styled.img`
  background-color: pink;
  height: calc(1080px / 3.5);
  width: 100%;
  border-radius: 10px;
  border: outset 1px;
`;
const PictureContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
`;
const Picture = styled.img<TSelect>`
  background-color: blue;
  height: calc(1080px / 14);
  width: 25%;
  border-radius: 10px;
  border: outset 1px;
  border: ${({ $onActive }) => ($onActive ? "solid 1px black" : "none")};
  &:hover {
    border: ${({ $selected }) => ($selected ? "solid 1px black" : "none")};
    color: ${({ $selected }) => ($selected ? "black" : "none")};
  }
`;
