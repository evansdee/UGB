/* eslint-disable react/prop-types */
import { createContext } from "react";
import styled from "styled-components";
import FlexItem from "../ui/FlexItem";

const StyledFooter = styled.div`
  padding: 1.5em 1.5em 5em;
  background-color: #28282b;
  font-family: sans-serif;
`;
const StyledDiv = styled.div`
display: grid;
row-gap: 1em;
  color: #fff;

  p {
    line-height: 0.9em;
    font-size: 0.9em;
  }
`;

const StyledHeader = styled.h3`
  color: ${(prop) => prop.color || "orange"};
  /* margin:.5em 0; */
`;

const FooterContext = createContext();
export default function Footer({ children }) {
  return (
    <FooterContext.Provider value={{}}>
      <StyledFooter>
        <FlexItem direct={"column"} gap="3">
          {children}
        </FlexItem>
      </StyledFooter>
    </FooterContext.Provider>
  );
}

function Description({ title, desc, icons = [], render, color }) {
  return (
    <StyledDiv>
      {/* <FlexItem direct="column" gap="1"> */}
        <StyledHeader color={color}>{title}</StyledHeader>
        <p>{desc}</p>
        <FlexItem>{icons?.map(render)}</FlexItem>
      {/* </FlexItem> */}
    </StyledDiv>
  );
}

function Links({ title, data = [], render }) {
  return (
    <StyledDiv>
      <StyledHeader>{title}</StyledHeader>
      <FlexItem direct="column" gap=".5">
        {data?.map(render)}
        {/* <hr /> */}
      </FlexItem>
    </StyledDiv>
  );
}

function Contact({ title, phone, email, address }) {
  return (
    <StyledDiv>
        {/* <FlexItem  */}
      <StyledHeader>{title}</StyledHeader>
      <p>
        {phone[0]} {phone[1]}
      </p>
      <p>{email}</p>
      <p>{address}</p>
    </StyledDiv>
  );
}

Footer.Description = Description;
Footer.Contact = Contact;
Footer.Links = Links;
