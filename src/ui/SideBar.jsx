/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import FlexItem from "./FlexItem";
import Button from "./Button";
import { useContext } from "react";
import { ToggleContext } from "../hooks/useMenu";
import { linkArr } from "../helper/data";
// import { useMenu } from "../hooks/useMenu";

const StyledSide = styled.div`
  background-color: #28282b;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  transition: all 0.8s;
  width: 60vw;
  height: 100vh;
  z-index: 99;
  position: fixed;
  padding: 1em;
  top: 0;
  left: -100%;
  ${(prop) =>
    prop.left &&
    css`
      left: 0;
    `};
`;



// export {linkArr}
export default function SideBar({ left }) {
  const {setIsSideToggle} = useContext(ToggleContext)

  return (
    <StyledSide left={left}>
      <FlexItem direct="column">
        {linkArr.map((ele) => {
          return (
            <Button
              key={ele.title}
              onClick={() => setIsSideToggle(false)}
              to={ele.url}
              color={"#fff"}
            >
              {ele.title}
            </Button>
          );
        })}
      </FlexItem>
    </StyledSide>
  );
}
