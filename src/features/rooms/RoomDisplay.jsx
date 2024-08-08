/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Image from "../../ui/Image";
import { formatToNaira } from "../../helper/helper";
import FlexItem from "../../ui/FlexItem";

const StyledRoomDisplay = styled.div`
  position: relative;
  margin: 1em 0 2em;
  height: 50dvh;
  z-index: 5;
  /* overflow: hidden; */
  /* overflow-y: hidden; */

  aside {
    width: 90%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border: 1em solid ${prop=>prop.clr === 'true' ? "#002C5C" :"#28282b"};
    background-color: #fff;
    z-index: -1;
  }
 @media(min-width:768px){
  width: 30dvw;
  margin: 1em auto 2em;
  /* background-color: red; */
 } 
`;

const Container = styled.div`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const Div = styled.div`
  position: absolute;

  ${(prop) =>
    prop.under === "true"
      ? css`
          bottom: 5%;
          right: 5%;
        `
      : css`
          top: 5%;
          left: 5%;
        `};
  color: #fff;
  z-index: 2;
`;

const data = {
  label: "Luxurious Room",
  amount: 500000,
};

export default function RoomDisplay({ title, image,amount,clr }) {
  console.log(image, title);
  return (
    <StyledRoomDisplay clr={clr}>
      <Container>
        <Image src={image} height={"43dvh"} />
        <Div style={{textTransform:'capitalize'}}>{title} room</Div>
        <Div under="true">
          <FlexItem direct="column" gap=".5">
            <p>Today</p>
            <p>
              {" "}
              <span style={{ color: "#007BFF" }}>
                {formatToNaira(amount)}
              </span> <br />
              / year
            </p>
          </FlexItem>
        </Div>
      </Container>
      <aside></aside>
    </StyledRoomDisplay>
  );
}
