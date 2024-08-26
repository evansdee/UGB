import Carousel from "../components/Carousel";
import Jumbotron from "../components/Jumbotron";
import { back } from "../helper/files";
import Frame from "../components/Frame";
import { aboutList, roomList, valueList, vmList } from "../helper/data";
import Button from "../ui/Button";
import styled from "styled-components";
import { useView } from "../hooks/useView";

const StyledItem = styled.h2`
  color: #007bff;
  font-family: ${(prop) => prop.font || ""};
  text-transform: uppercase;
  /* padding: .5em; */
`;

const Wierd = styled.div`
display: flex;
flex-wrap: nowrap;
overflow-x: scroll;
white-space: nowrap;
scrollbar-width: none;

@media(min-width:768px){
    margin: 0em 5em;
    justify-content: space-around;
  }
`
export default function AboutUs() {
  const {view} = useView()

  return (
    <>
      <Jumbotron img={back} title={"About"} us="true" imgHeight={view>= 768 && '100dvh'}/>
      <Frame direction={"bottom"} view='true'>
        <Frame.Title>
          About <span style={{ color: "#007BFF" }}>UGB</span> Hotel
        </Frame.Title>
        <Frame.DashWrapper />
        <br />
        {aboutList.map((ele) => (
          <Frame.Description key={ele} txtAlign={"justify"}>
            {ele}
          </Frame.Description>
        ))}
      </Frame>
      {/* <Carousel> */}
      <Wierd>

        {roomList.map((ele) => {
          const [x,y] = ele.label.split(' ')
          return (
            <Button key={ele.label}>
              <StyledItem font={ele.font}>
                {x}
                <br />
                {y}
                </StyledItem>
            </Button>
          );
        })}
        </Wierd>
      {/* </Carousel> */}
      <Frame direction={"top"} view='true'>
        <Frame.Title txtAlign={"left"} sty={"margin:2em 0 .5em;"}>
          Our Vision & Mission
        </Frame.Title>
        <Frame.List data={vmList} sty={"list-style:inside disc;"} />
        <Frame.Title txtAlign={"left"} sty={"margin:2em 0 .5em;"}>
          Our Values
        </Frame.Title>
        <Frame.List data={valueList} sty={"list-style: inside disc;"} />
      </Frame>
    </>
  );
}
