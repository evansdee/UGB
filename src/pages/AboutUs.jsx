import Carousel from "../components/Carousel";
import Jumbotron from "../components/Jumbotron";
import { back } from "../helper/files";
import Frame from "../components/Frame";
import { aboutList, roomList, valueList, vmList } from "../helper/data";
import Button from "../ui/Button";
import styled from "styled-components";

const StyledItem = styled.h2`
  color: #007bff;
  font-family: ${(prop) => prop.font || ""};
`;
export default function AboutUs() {
  return (
    <>
      <Jumbotron img={back} title={"About"} us="true" />
      <Frame direction={"bottom"}>
        <Frame.Title>
          About <span style={{ color: "#007BFF" }}>UGB</span> Hotel
        </Frame.Title>
        <Frame.DashWrapper />
        {aboutList.map((ele) => (
          <Frame.Description key={ele} txtAlign={"justify"}>
            {ele}
          </Frame.Description>
        ))}
      </Frame>
      <Carousel>
        {roomList.map((ele) => {
          return (
            <Button key={ele.label}>
              <StyledItem font={ele.font}>{ele.label}</StyledItem>
            </Button>
          );
        })}
      </Carousel>
      <Frame direction={"top"}>
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
