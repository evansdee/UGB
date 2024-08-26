/* eslint-disable react/prop-types */

import Frame from "../../components/Frame";
import HotelCarousel from "../../HotelCarousel";
import Button from "../../ui/Button";
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
// import Image from "../ui/Image";
import Carousel from "../../components/Carousel";
import FlexItem from "../../ui/FlexItem";
import styled from "styled-components";
import { formatToNaira } from "../../helper/helper";
import { useView } from "../../hooks/useView";

const StyledBox = styled.p`
  border: 1px solid #28282b81;
  text-align: center;
  padding: 5px 0.4em;
  margin: 0 0.3em;
  border-radius: 5px;
  height: 100%;

  span {
    font-size: 0.7em;
  }
`;

const All = styled.div`
  margin: 3em 6em;
  box-shadow: 1px 1px 5px #28282b;
  padding: 1em;
  background-color: #fff;

  @media(max-width:768px){
    margin: 0;
  box-shadow: none;
  padding: 0em;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .lover,
  .hate {
    width: 45%;
    padding: 1em;
    @media(max-width:768px){
    width: inherit;
    padding: 0;
  }
  }

  /* .hate{
  width:50%;
} */
`;

export default function RoomItem({ ele, data, index, name }) {
  const { view,isView } = useView();
  const {
    avaliable,
    label,
    numRoom,
    numAdult,
    numberOfPersons,
    img,
    description,
    id,
    currentPrice,
    oldPrice,
  } = ele;

  function isEven(number) {
    return number % 2 === 0;
  }

  return (
    <>
      <Frame
        bg="#fff"
        direction={!isEven(index) ? "top" : "bottom"}
        sty={`${!isView && "margin:0 0 2em;"}box-shadow:0px 2px 6px 2px rgba(0,0,0,.15); `}
      >
        <All>
          {avaliable ? (
            <Frame.Title
              txtAlign={"left"}
              sty="font-size:.7em;border:1px solid #28282b53; display:table;padding:.5em;"
            >
              Room {numRoom} | Adult {numAdult}
            </Frame.Title>
          ) : (
            <>
              <Frame.Title label={"YOU MISSED IT"} color={"red"} />
              <Frame.Description>
                Sorry, this room is no longer available
              </Frame.Description>
            </>
          )}

          <Container>
            <div className="hate">
              <HotelCarousel data={img} content={`${avaliable}`} />
            </div>

            <div className="lover">
              <Frame.Title
                txtAlign={"left"}
                sty={
                  "background:#F2F8FF;display:table;padding:.3em;font-size:.7em;"
                }
              >
                <FlexItem align="center" gap=".3">
                  <FaRegUser /> <span> | Max {numberOfPersons} persons</span>
                </FlexItem>
              </Frame.Title>
              <Frame.Title
                label={label}
                txtAlign={"left"}
                sty={"font-size:.9em;margin:1em 0;"}
              />
              <Frame.Description txtAlign={"justify"} sty={"font-size:.9em"}>
                {description}
              </Frame.Description>
              <Carousel room="true" pad={"1em 0"}>
                {data.map((ele) => (
                  <div key={ele.label}>
                    <StyledBox>
                      <FlexItem direct="column" align="center" gap=".3">
                        <ele.icon />
                        <span>{ele.label}</span>
                      </FlexItem>
                    </StyledBox>
                  </div>
                ))}
              </Carousel>
            </div>
          </Container>

          <Frame.Title txtAlign={"left"}>
            <FlexItem just="between">
              <h5 style={{ fontSize: ".8em" }}>Best value rate</h5>
              <span style={{ fontSize: ".65em", color: "#949191" }}>
                <del>{formatToNaira(oldPrice)}</del>{" "}
              </span>
            </FlexItem>
          </Frame.Title>

          <Frame.Title txtAlign={"left"}>
            <FlexItem just="between">
              <h5 style={{ fontSize: ".7em", padding: "0 5em 0 0" }}>
                Secure the lowest price available when you book now
              </h5>
              <span style={{}}>{formatToNaira(currentPrice)}</span>
            </FlexItem>
          </Frame.Title>

          <FlexItem align="center" just="between">
            <span style={{ fontSize: ".6em", color: "#949191" }}>
              <IoMdCloseCircle /> Non Refundable
            </span>
            <Button
              to={avaliable && `/rooms/${name}-rooms/${id}`}
              bg={avaliable ? "#007BFF" : "gray"}
              color="#fff"
            >
              {avaliable ? "Pay for room" : "Unavailable"}
            </Button>
          </FlexItem>
        </All>
      </Frame>
    </>
  );
}
