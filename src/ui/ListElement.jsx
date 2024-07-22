/* eslint-disable react/prop-types */
import styled from "styled-components";
import FlexItem from "./FlexItem";

const StyledLi = styled.div`
  text-align: center;
  width: 100%;
  margin: 1.5em 0;
  padding: 0 1.5em;

  span{
    font-size: 1.4em;
    color: #007BFF;
  }
  h5{
    color: #007BFF;
    font-size: 1.1em;
  }
  p{
    font-size: .9rem;
  }
`;

export default function ListElement({ ele }) {
  return (
    <StyledLi>
      <FlexItem direct={"column"} gap={.5}>
        <span><ele.icon/></span>
        <h5>{ele.title}</h5>
        <p>{ele.content}</p>
      </FlexItem>
    </StyledLi>
  );
}
