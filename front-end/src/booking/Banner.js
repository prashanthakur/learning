import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carousaldata } from "../details/sliderdata";


export default function Banner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <center>
      <Slider {...settings} style={{width:"300px"}}>
        {
            carousaldata.map((item) => {
                return(
                    <img src={item.url} style={{borderRadius:"2px"}}/>
                )
            })
        }
      </Slider>
    </center>
  );
}
