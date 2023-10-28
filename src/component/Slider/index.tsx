import React from "react";
import Slider from "react-slick";
import Card from "../Card";
import styled from "styled-components";
import arrowRight from "../../icons/arrow-right.svg";
import arrowLeft from "../../icons/arrow-left.svg";

const SimpleSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <img src={arrowRight} alt="" />,
    prevArrow: <img src={arrowLeft} alt="" />,
    dots: true,
    centerMode: true,
  };

  return (
    <Slider {...settings}>
      <Card image={"a"} category={"a"} title={"a"} year={"a"}  center={true}/>
      <Card image={"a"} category={"a"} title={"a"} year={"a"}  center={true}/>
      <Card image={"a"} category={"a"} title={"a"} year={"a"}  center={true}/>
      <Card image={"a"} category={"a"} title={"a"} year={"a"}  center={true}/>
      <Card image={"a"} category={"a"} title={"a"} year={"a"}  center={true}/>
    </Slider>
  );
};

export default SimpleSlider;


