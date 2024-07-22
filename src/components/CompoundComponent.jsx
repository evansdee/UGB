import { createContext } from "react";
import styled from "styled-components";

const StyledCompound= styled.div`
  padding: 2em 1em;
  background-color: #f0f7ff;
`;

const StyledHeader = styled.h1`
  border: 1px solid #28282b22;
  display: table;
  font-size: 1.3em;
  padding: 0.5em;
`;

const StyledTitle = styled.p`
  text-align: center;
  margin: 1em 0;
  padding: 0.5em 1em;
`;

const StyledList = styled.ul`
margin-top: 1.5em;
`

const CompoundContext = createContext();

export default function CompoundComponent({ children }) {
  return (
    <CompoundContext.Provider value={null}>
      <StyledCompound>{children}</StyledCompound>
    </CompoundContext.Provider>
  );
}

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

function List({ render, data = [] }) {
  return <StyledList>{data?.map(render)}</StyledList>;
}

CompoundComponent.Header = Header;
CompoundComponent.Title = Title;
CompoundComponent.List = List;
