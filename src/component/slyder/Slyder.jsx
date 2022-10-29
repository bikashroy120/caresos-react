import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../../assets/data/data";
import "./slyder.css";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"



function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div onClick={onClick} className="arrow">
        <AiOutlineArrowRight />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
     <div onClick={onClick} className="arrow left">
        <AiOutlineArrowLeft />
      </div>
    );
  }


const Slyder = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data.map((item, index) => {
        return (
          <div className="slyder_box" key={index}>
            <div
              className="sluder_item" style={{ background: `url("${item.img}")`,  backgroundPosition: "center",
              backgroundSize: "cover",backgroundRepeat :"no-repeat"  }}
            >
              <div className="sluder_heade">
                <h4>{item.title}</h4>
                <p>{item.sub}</p>
              </div>
              <div className="slyder_button">
                <h2>{item.but}</h2>
                <div></div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Slyder;
