import React from "react";
import Slider from "react-slick";
import Card from "../Card";
import arrowRight from "../../icons/arrow-right.svg";
import arrowLeft from "../../icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import "./slider.css";

type Tslider = {
  cardContent?: {
    year: string;
    image: string;
    category: string;
    description: string;
  }[];
  card?: boolean;
  cardDisplay?: "horizontal" | "vertical";
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
    useCSS: true,
  };

  return (
    <Slider {...settings}>
      {props.card
        ? props?.cardContent?.map((e) => (
            <div className="test1">
              <Card
                key={e.description}
                image={e.image}
                category={e.category}
                title={e.description}
                year={e.year}
                center
                onClick={() => navigate("/detail")}
                display={props.cardDisplay}
              />
            </div>
          ))
        : null}
    </Slider>
  );
};

export default SimpleSlider;
