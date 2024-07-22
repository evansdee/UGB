/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Image from "../ui/Image";
import Button from "../ui/Button";
import FlexItem from "../ui/FlexItem";

const StyledJumbotron = styled.div`
  position: relative;
  /* top: 0; */
  max-width: 100%;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 1;
    width: 100%;
    height: 100%;
  }
`;

const StyledHeader = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 2;
  color: #fff;

  ${(prop) =>
    prop.sty &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      bottom: initial;
    `}

  p {
    display: flex;
    align-items: center;
    gap: 0.3em;
  }
`;

export default function Jumbotron({
  img,
  title,
  us,
  children,
  imgHeight,
  sty,
}) {
  return (
    <StyledJumbotron>
      <Image src={img} height={imgHeight || "40dvh"} />
      <StyledHeader sty={sty}>
        <FlexItem direct="column" gap="1">
          {children || (
            <>
              <h1>
                {title} {us && "Us"}
              </h1>
              <p>
                <Button to={"/home"} color="#007BFF">
                  Home
                </Button>
                / <span> {title} </span>
              </p>
            </>
          )}
        </FlexItem>
      </StyledHeader>
    </StyledJumbotron>
  );
}
