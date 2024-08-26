import Jumbotron from "../components/Jumbotron";
import img6 from "../assets/img-6.jpg";
import Form from "../ui/Form";
import Frame from "../components/Frame";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import FlexItem from "../ui/FlexItem";
import Map from "../components/Map";
import { useView } from "../hooks/useView";
import styled from "styled-components";

const Nill = styled.div`
display: flex;
flex-direction: column;

@media(min-width:768px){
  flex-direction:row;
  align-items: center;
}
`

export default function ContactUs() {
  const { view,isView } = useView();

  return (
    <>
      <Jumbotron
        img={img6}
        title={"Contact"}
        us={"Us"}
        imgHeight={view >= 768 && "100dvh"}
      />
      <Frame>
        <Frame.Title
          label={"If you have any question dont hesitate to contact us."}
          // txtAlign={"justify"}
          sty={"line-height:1.5em;font-size:1.5em;"}
          color={"#007bff"}
          txtAlign={view >=768 ? 'center': 'justify'}
        />

        <Nill>
          <Form />
          <div>
            <Frame.Title
              label={"Information"}
              sty={
                "letter-spacing:6px; text-transform:upperCase;font-weight:lighter;color:#007bff;"
              }
            />
            <FlexItem align="center" gap="1">
              <div>
                <FaLocationDot />
              </div>
              <Frame.Description txtAlign={"left"} sty={"font-size:.7em;"}>
                No 18 say Lodgix is ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc vulputate libero et velit interdum.
              </Frame.Description>
            </FlexItem>
            <FlexItem align="center" gap="1">
              <div>
                <FaPhone />
              </div>
              <Frame.Description txtAlign={"left"} sty={"font-size:.7em;"}>
                0800000000 091930984894
              </Frame.Description>
            </FlexItem>
            <FlexItem align="center" gap="1">
              <div>
                <IoIosMail />
              </div>
              <Frame.Description txtAlign={"left"} sty={"font-size:.7em;"}>
                No 18 say Lodgix is ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc vulputate libero et velit interdum.
              </Frame.Description>
            </FlexItem>
          </div>
        </Nill>
      </Frame>
      <Map view={view} />
    </>
  );
}
