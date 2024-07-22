/* eslint-disable react/prop-types */
import Slider from "react-slick";
import styled from "styled-components";

const StyledNext = styled.div`
  display: none!important;
`

export default function Carousel({ room, children,pad }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: room ? 1000 : 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <StyledNext/>,
    prevArrow: '',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          //   dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: room ? 4 : 2,
          slidesToScroll: room ? 3 : 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container" style={{ padding: pad || "1.5em" }}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
