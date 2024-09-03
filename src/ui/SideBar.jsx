/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import FlexItem from "./FlexItem";
import Button from "./Button";
import { useContext } from "react";
import { ToggleContext } from "../hooks/useMenu";
import { linkArr } from "../helper/data";
import { useLocalUser } from "../hooks/UserDetails";
import { toast } from "react-toastify";
// import { useMenu } from "../hooks/useMenu";

const StyledSide = styled.div`
  background-color: #28282b;
  font-family: "Rubik";
  transition: all 0.8s;
  width: 60vw;
  height: 100vh;
  z-index: 9999;
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
export default function SideBar() {
  const { isSideToggle: left, setIsSideToggle } = useContext(ToggleContext);
  const {
    value: { isAuthenticated },
    setValue,
  } = useLocalUser();

  function handleLogout() {
    setValue(p=>({...p,isAuthenticated:false}));
    setIsSideToggle(false)
    toast.success('Logged out successfully')
  }

  console.log(isAuthenticated);
  return (
    <StyledSide left={left}>
      <FlexItem direct="column">
        {linkArr.map((ele) => {
          const x = ele.title === "Login";

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
        {isAuthenticated && (
          <Button onClick={handleLogout} color={"#fff"} to={"/home"}>
            Logout
          </Button>
        )}
      </FlexItem>
    </StyledSide>
  );
}
