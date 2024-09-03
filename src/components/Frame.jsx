/* eslint-disable react/prop-types */
import { createContext } from "react";
import styled, { css } from "styled-components";
import FlexItem from "../ui/FlexItem";
import Image from "../ui/Image";

const StyledFrame = styled.div`
  position: relative;
  background: ${(prop) => prop.bg || "#f0f7ff"};
  padding: 1em 1.5em 4em;
  overflow: hidden;
  font-family: "Effra";

  /* z-index: 647747; */
  ${(prop) => prop.sty || ""}

  ${(prop) => {
    switch (prop.direction) {
      case "top":
        return css`
          &::before {
            content: "";
            position: absolute;
            border-radius: 50%;
            background: #dcedff;
            z-index: 1;
            width: 408.56px;
            height: 437px;
            top: -171px;
            left: -150px;
          }
        `;
      case "bottom":
        return css`
          &::after {
            content: "";
            border-radius: 50%;
            z-index: 1;

            position: absolute;
            background: #dcedff;
            width: 408.56px;
            height: 437px;
            bottom: -204px;
            right: -217px;
          }
        `;
      default:
        return css``;
    }
  }};

  @media(min-width:768px) {
    padding: 1em 2.5em;
    ${(prop) =>
      prop.view === "true" &&
      css`
        margin: 2em 5em;
      `};
  }

  h4 {
    font-size: 1.2em;
  }
`;

const StyledTitle = styled.h4`
  color: ${(prop) => prop.color || "#28282b"};
  text-align: ${(prop) => prop.txtAlign || "center"};
  position: relative;
  z-index: 2;
  margin: 0.5em 0;
  ${(prop) => prop.sty || ""}
`;

const StyledList = styled.ul`
  color: #28282b;
  /* list-style: inside disc; */
  ${(prop) => prop.sty || ""}
  display: flex;
  flex-direction: column;
  gap: 1em;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;

  ${(prop) =>
    prop.flex === "service" &&
    css`
      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;

        li {
          width: 30%;
        }
      }
    `}

  @media(min-width:768px) {
    li {
      font-size: 1.3em;
    }
  }

  li {
    /* text-indent:10px; */
    p {
      text-align: center;
    }
  }
`;

const StyledDescription = styled.p`
  text-align: ${(prop) => prop.txtAlign || "center"};
  ${(prop) => prop.sty || ""}
  position: relative;
  z-index: 2;
  @media(min-width:768px) {
    font-size: 1em;
  }
`;
const StyledDashWrapper = styled.div`
  margin: 1em 0;
  @media (min-width: 768px) {
    width: 40%;
    margin: 0 auto;
  }
`;

const Dash = styled.div`
  width: ${(props) => props.width};
  height: 2px;
  background-color: #007bff;
`;

const FrameContext = createContext();

export default function Frame({ children, direction, bg, sty,...prop}) {
  return (
    <FrameContext.Provider value={{}}>
      <StyledFrame direction={direction} bg={bg} sty={sty} {...prop}>
        {children}
      </StyledFrame>
    </FrameContext.Provider>
  );
}

function Title({ label, sty, children, txtAlign, color }) {
  return (
    <StyledTitle sty={sty} txtAlign={txtAlign} color={color}>
      {label || children}
    </StyledTitle>
  );
}
function DashWrapper() {
  return (
    <StyledDashWrapper>
      <FlexItem gap=".1" align="center" direct="column">
        <Dash width="20%" />
        <Dash width="40%" />
        <Dash width="20%" />
      </FlexItem>
    </StyledDashWrapper>
  );
}

function Description({ txtAlign, children, sty }) {
  return (
    <StyledDescription sty={sty} txtAlign={txtAlign}>
      {children}
      <br />
      <br />
    </StyledDescription>
  );
}

function List({ data, sty, fetch, imgHeight, flex }) {
  return (
    <StyledList sty={sty} flex={flex}>
      {/* <FlexItem direct="column" gap=".8"> */}
      {data.map((ele, i) => (
        <ListItem key={i} ele={ele} fetch={fetch} imgHeight={imgHeight} />
      ))}
      {/* </FlexItem> */}
    </StyledList>
  );
}

function ListItem({ ele, fetch, imgHeight }) {
  if (fetch) return <li></li>;
  if (typeof ele === "string") return <li>{ele}</li>;

  return (
    <li style={{ margin: "1em 0" }}>
      <Image src={ele.img} height={imgHeight || "200px"} />
      <h4>{ele.label}</h4>
      <p>{ele.desc}</p>
    </li>
  );
}

Frame.Title = Title;
Frame.List = List;
Frame.DashWrapper = DashWrapper;
Frame.Description = Description;
