import styled from "styled-components";
import { linkArr } from "../helper/data";
import Button from "./Button";
import FlexItem from "./FlexItem";

const Ul = styled.ul`
  list-style: none;

  
`;

export default function NavUl({check}) {
  return (
    <Ul check={check}>
      <FlexItem gap='.5'>
        {linkArr.map((ele) => (
            <li key={ele.url}>
              <Button to={ele.url}
                  color={check === "all" ? "#fff" : "#28282b"}
              
              >{ele.title}</Button>
            </li>
          ))}
      </FlexItem>
    </Ul>
  );
}
