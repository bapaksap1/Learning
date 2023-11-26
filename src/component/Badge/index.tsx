import React from "react";
import styled from "styled-components";
import P from "../Font/P";

type Tbadge = {
  tag: string;
};

const Badge: React.FC<Tbadge> = (props) => {
  return (
    <Container>
      {props.tag}
    </Container>
  );
};

export default Badge;

const Container = styled.div`
  background-color: #3a3737;
  -webkit-text-stroke-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
`;
