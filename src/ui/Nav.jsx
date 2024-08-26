import styled, { css } from "styled-components";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Button from "./Button";
import FlexItem from "./FlexItem";
import { useContext } from "react";
import SideBar from "./SideBar";
import { ToggleContext } from "../hooks/useMenu";
import { CheckContext } from "../hooks/useSome.jsx";
import { useNavigate } from "react-router-dom";
import NavUl from "./NavUl.jsx";
import { useView } from "../hooks/useView.js";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1001;
  width: 100%;
  padding: 0 0.5em;
  display: flex;
  background-color: #fff;
  font-family: sans-serif;
  color: #28282b;
  font-family: "Rubik";


  ${(prop) =>
    prop.check === "all" &&
    css`
      background: transparent;
      position: absolute;
      color: #fff;
      /* float:right; */
    `}
  ${(prop) =>
    prop.check === "none" &&
    css`
      /* background: ; */
      position: static;
      color: #28282b;
      /* float:right; */
    `}

    @media(min-width:768px){
     padding: .5em 2.5em;

     a{
      font-size:1.1rem;
     }
    }
`;

export default function Nav() {
  const navigate = useNavigate();
  const { isSideToggle, setIsSideToggle } = useContext(ToggleContext);
  
  const { check } = useContext(CheckContext);
  const {view} = useView()

  return (
    <>
      <StyledNav check={check}>
        <FlexItem align={"true"} just={"between"} width={100}>
          {check === "none" ? (
            <Button onClick={() => navigate(-1)} extra="font-size:1.5em;">
              <IoArrowBackCircleOutline />
            </Button>
          ) : (
            <Button to={"home"} color={check === "all" ? "#fff" : "#28282b"}>
              <h1>Logo</h1>
            </Button>
          )}

          <FlexItem align="true" gap=".5">
            {/* <Link to={"login"}> */}
            {view >= 768 ? (
              <NavUl check={check}/>
            ) : (
              <>
                <Button
                  to={"login"}
                  color={check === "all" ? "#fff" : "#28282b"}
                >
                  Get in Touch
                </Button>
                {/* </Link> */}
                <Button
                  onClick={() => setIsSideToggle((p) => !p)}
                  color={check === "all" ? "#fff" : "#28282b"}
                >
                  {isSideToggle ? <RiCloseLine /> : <RiMenu3Fill />}
                </Button>
              </>
            )}
          </FlexItem>
        </FlexItem>
      </StyledNav>

      {view < 768 && <SideBar />}
    </>
  );
}
