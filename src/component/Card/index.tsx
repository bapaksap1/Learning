import React from "react";
import styled from "styled-components";
import { Tcard } from "./Tcard";
import P from "../Font/P";
import { grey } from "../../utils/constants/color";

const Card: React.FC<Tcard> = (props) => {
  return (
    <Align $center={props.center}>
      <Container onClick={props.onClick}>
        <Picture src={props.image} alt={"pic"} />
        <Detail>
          <P label={props.category} color={grey} />
          <Description>
            <P label={props.title} />
            <P label={props.year} />
          </Description>
        </Detail>
      </Container>
    </Align>
  );
};

export default Card;

type Talign = {
  $center?: boolean;
};

const Align = styled.div<Talign>`
  display: flex;
  justify-content: ${({ $center }) => ($center ? "center" : "none")};
`;

const Container = styled.div`
  border-radius: 10px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 75% 25%;
  width: 370px;
  height: 300px;
  border: solid black 1px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  gap: 15px;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0px 0px;
`;
