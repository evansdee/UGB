/* eslint-disable react/prop-types */
import { createContext } from "react";
import styled, { css } from "styled-components";
import FlexItem from "../ui/FlexItem";
import Image from "../ui/Image";

const StyledFrame = styled.div`
  position: relative;
  background:${prop=>prop.bg || '#f0f7ff'};
  padding: 1em 1.5em 4em;
  overflow: hidden;
  z-index: 2;
  ${prop=>prop.sty || ''};

  ${(prop) => {
    switch (prop.direction) {
      case "top":
        return css`
          &::before {
            content: "";
            position: absolute;
            border-radius: 50%;
            background: #dcedff;
            z-index: -1;
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
            z-index: -1;

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
  }}
`;

const StyledTitle = styled.h4`
  color: ${(prop) => prop.color || "#28282b"};
  text-align: ${(prop) => prop.txtAlign || "center"};

  margin:.5em 0;
  ${(prop) => prop.sty || ""}
  
`;
const StyledList = styled.ul`
  color: #28282b;
  /* list-style: inside disc; */
  ${(prop) => prop.sty || ""}

  li {
    /* text-indent:10px; */
    p{
      text-align: center;
    }
  }
`;

const StyledDescription = styled.p`
  text-align: ${(prop) => prop.txtAlign || "center"};
  ${(prop) => prop.sty || ""}
`;
const StyledDashWrapper = styled.div`
  margin: 1em 0;
`;

const Dash = styled.div`
  width: ${(props) => props.width};
  height: 2px;
  background-color: #007bff;
`;

const FrameContext = createContext();

export default function Frame({ children, direction,bg,sty }) {
  return (
    <FrameContext.Provider value={{}}>
      <StyledFrame direction={direction} bg={bg} sty={sty}>{children}</StyledFrame>
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

function List({ data, sty,fetch }) {
  return (
    <StyledList sty={sty}>
      <FlexItem direct="column" gap=".8">
        {data.map((ele, i) => (
          <ListItem key={i} ele={ele}fetch={fetch} />
        ))}
      </FlexItem>
    </StyledList>
  );
}

function ListItem({ ele,fetch }) {
  if(fetch) return <li>


  </li>
  if (typeof ele === "string") return <li>{ele}</li>;

  return (
    <li style={{margin:"1em 0"}}> 
      <Image src={ele.img} height={"200px"} />
      <h4>{ele.label}</h4>
      <p>{ele.desc}</p>
    </li>
  );
}

Frame.Title = Title;
Frame.List = List;
Frame.DashWrapper = DashWrapper;
Frame.Description = Description;
