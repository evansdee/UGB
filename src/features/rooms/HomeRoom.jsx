/* eslint-disable react/prop-types */
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "../../ui/Image";
import Button from "../../ui/Button";
import styled, { css } from "styled-components";

const StyledRoom = styled.div`
  width: ${(prop) => prop.width || "100%"};
  position: relative;
  z-index: 5;

  margin: 0.5em 0;
  ${(prop) =>
    prop.top &&
    css`
      top: ${prop.top};
      transform: translateY(-${prop.top});
    `}

  &::after {
    position: absolute;
    z-index: 1;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media(min-width:768px){
    margin: .5em 1em;
  }
`;

const StyledHeader = styled.h4`
  position: absolute;
  z-index: 2;
  top: 8%;
  left: 3%;
  color: #ffffffa2;
`;

const StyledIcon = styled.div`
  position: absolute;
  z-index: 2;

  top: 50%;
  ${(prop) =>
    prop.iconPosition ||
    css`
      right: 0;
      transform: translate(0, -50%);
    `}

  svg {
    font-size: 4em;
    color: #ffffffa2;
  }
`;

export default function HomeRoom({ ele, top, width, iconPosition, go }) {
  return (
    <StyledRoom top={top} width={width}>
      <Image src={ele.img} height={"200px"} go={go} />
      <StyledHeader>{ele.label}</StyledHeader>
  
      <StyledIcon iconPosition={iconPosition}>
        <Button to={ele.url}>
         <RiArrowRightSLine />
        </Button>
      </StyledIcon>
    </StyledRoom>
  );
}
