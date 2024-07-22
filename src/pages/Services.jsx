import Frame from "../components/Frame";
import Jumbotron from "../components/Jumbotron";
import service from "../assets/service.jpg";
import { serviceList } from "../helper/data";

export default function Services() {
  console.log(serviceList);
  return (
    <>
      <Jumbotron img={service} title={"Services"} />
      <Frame direction={'top'}>
        <Frame.Title label={"Our Services"} />
        <Frame.Description>
          With UGB you have one easy-to-learn system that's working for you 247
        </Frame.Description>
        <Frame.DashWrapper />
        <Frame.List
          data={serviceList}
          sty="list-style:none; h4{color:#007BFF;margin:.5em 0;text-align:center;}"
        />
      </Frame>
    </>
  );
}
