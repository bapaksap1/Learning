import React from "react";
import styled from "styled-components";
import { Tcard } from "./Tcard";
import P from "../Font/P";
import { darkGrey, grey } from "../../utils/constants/color";

const Card: React.FC<Tcard> = (props) => {
  return (
    <Align $center={props.center}>
      <Container onClick={props.onClick} $display={props.display}>
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

Card.defaultProps = {
  display: "horizontal",
};

type TStyle = {
  $center?: boolean;
  $display?: string;
};

const Align = styled.div<TStyle>`
  display: flex;
  justify-content: ${({ $center }) => ($center ? "center" : "none")};
`;

const Container = styled.div<TStyle>`
  border-radius: 10px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: ${({ $display }) => ($display === "vertical" ? "60% 40%" : "75% 25%")};;
  width: ${({ $display }) => ($display === "vertical" ? "360px" : "370px")};
  height: ${({ $display }) => ($display === "vertical" ? "400px" : "300px")};
  border: solid ${grey} 1px;
  box-shadow: 3px 3px 3px 3px ${grey};
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
