import React from "react";
import Slider from "react-slick";
import Card from "../Card";
import arrowRight from "../../icons/arrow-right.svg";
import arrowLeft from "../../icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

type Tslider = {
  cardContent?: {
    year: string;
    image: string;
    category: string;
    description: string;
  }[];
  card?: boolean;
};

const SimpleSlider: React.FC<Tslider> = (props) => {
  let navigate = useNavigate();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <img src={arrowRight} alt="" />,
    prevArrow: <img src={arrowLeft} alt="" />,
    dots: true,
  };

  return (
    <Slider {...settings}>
      {props.card
        ? props?.cardContent?.map((e) => (
            <Card
              image={e.image}
              category={e.category}
              title={e.description}
              year={e.year}
              center
              onClick={() => navigate("/detail")}
            />
          ))
        : null}
    </Slider>
  );
};

export default SimpleSlider;
