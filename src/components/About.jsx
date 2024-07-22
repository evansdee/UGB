import styled from "styled-components";
import FlexItem from "../ui/FlexItem";
import Button from "../ui/Button";
import { GoDash } from "react-icons/go";

const AboutContainer = styled.div`
  padding: 0.5em 1em;
  color: #28282b;
  font-family: sans-serif;
  margin: .5em 0 2em;
`;
const AboutHeader = styled.h1`
  border: 1px solid #28282b22;
  display: table;
  font-size: 1.3em;
  padding: 0.5em;
`;

const AboutContent = styled.div`
  position: relative;
  background: #f0f7ff;
  box-shadow: 0px 1px 21px rgba(0,0,0,.13);
  height: 90dvh;
  margin-top: 1em;
  padding: 2em 1.5em;
  overflow: hidden;
  z-index: 2;

  > p {
    /* color: red; */
    line-height: 21px;
    text-align: justify;
  }

  ul {
    margin-top: 1.5em;
  list-style: none;

    li {
      margin: 1em 0;

      h5 {
        color: #007bff;
      }
      p {
        border-bottom: 1px solid #0054AD;
        text-align: justify;
        padding: 0.5em 0;
      
      }
    }
  }

  &::after {
    content: "";
    z-index: -1;
    width: 731px;
    height: 1093px;
    /* background-color: red; */
    background: #dcedff;
    position: absolute;
    left: -290px;
    top: 113px;
    border-radius: 50%;
  }
`;

function LiElement({ ele }) {
    return (
      <>
        <li>
          <FlexItem align="true" gap=".5">
            <h5>{`0${ele}`}</h5>
            <p>
              Curabitur vel bibendum lorem. Morbi convallis convallis diam sit
              amet lacinia. Aliquam in elementum tellus
              {/* <hr /> */}
            </p>
          </FlexItem>
        </li>
      </>
    );
  }

  export default function About() {
    return (
      <AboutContainer>
        <AboutHeader>
          About Us
          <GoDash />
        </AboutHeader>
        <AboutContent>
          <p>
            Welcome to UGB Hostel, the premier accommodation for students, working
            class, bachelor and spinster, seeking a blend of comfort, convenience,
            and modern amenities. Our hostel is designed to provide a home away
            from home, ensuring a supportive and enriching environment for our
            residents.
            <br />
            <br />
            At UGB Hostel, each apartment is thoughtfully equipped with
            state-of-the-art features to meet the needs of today’s students:
          </p>
  
          <ul>
            {Array.from({ length: 3 }, (_, index) => index + 1).map((ele, i) => {
              return <LiElement ele={ele} key={i} />;
            })}
          </ul>
  
          <Button bg="#007BFF" color={'#fff'} to={'/about'}>
            Read More
          </Button>
        </AboutContent>
      </AboutContainer>
    );
  }
  


//   export {
//     LiElement,AboutContainer,AboutHeader,AboutContent
//   }

