/* eslint-disable react/prop-types */

import { RxDotFilled } from "react-icons/rx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "./ui/Image";
import styled from "styled-components";
import Button from "./ui/Button";
import FlexItem from "./ui/FlexItem";

const settings = {
  dots: true,
  //   dotsClass:'',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  appendDots: (dots) => (
    <div
      style={{
        position: "absolute",
        bottom: "5%",
        color: "red",
      }}
    >
      <ul style={{ margin: "0px", color: "red" }}> {dots} </ul>
    </div>
  ),
  customPaging: () => (
    <div
      style={{
        color: "#fff",
        width:"3rem",
      }}
    >
      <RxDotFilled />
    </div>
  ),
};

const HotelContainer = styled.div`
  position: relative;
  /* overflow: hidden; */
`;

const HotelFade = styled.div`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledHotelContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 2;
`;
export default function HotelCarousel({ data, content, noContent }) {
  return (
    <Slider {...settings}>
      {data.map((ele) => {
        return (
          <HotelContainer key={ele.id || ele}>
            <HotelFade />
            <Image src={ele.img || ele} alt="" />

            {content !== "true" && (
              <StyledHotelContent style={{ fontSize: "2em" }}>
                SOLD OUT
              </StyledHotelContent>
            )}
            {noContent && <HotelContent ele={ele} />}
            {/* </HotelFade> */}
          </HotelContainer>
        );
      })}
    </Slider>
  );
}

function HotelContent({ ele = {} }) {
  // const { btnTxt, head, spanEle, des, url } = ele;

  // if(ele.id) return
  return (
    <StyledHotelContent>
      <FlexItem direct="column" gap=".5">
        <h1>{ele.head}</h1>
        <p>{ele.spanEle}</p>
        <p>
          <i>{ele.des}</i>
        </p>
      </FlexItem>
      <Button
        to={ele.url || ""}
        bg=" #007BFF"
        color={"#fff"}
        m={"1em"}
        style={{ marginTop: "2em", borderRadius: "10px" }}
      >
        {ele.btnTxt ? "View Rooms" : "Book with the best"}
      </Button>
    </StyledHotelContent>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
