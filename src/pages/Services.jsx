import Frame from "../components/Frame";
import Jumbotron from "../components/Jumbotron";
import service from "../assets/service.jpg";
import { serviceList } from "../helper/data";
import { useView } from "../hooks/useView";

export default function Services() {
  const {view} = useView()

  return (
    <>
      <Jumbotron img={service} title={"Services"} imgHeight={view>= 768 && '100dvh'}/>
      <Frame direction={'top'}>
        <Frame.Title label={"Our Services"} />
        <Frame.Description>
          With UGB you have one easy-to-learn system that's working for you 247
        </Frame.Description>
        <Frame.DashWrapper />
        <Frame.List
          data={serviceList}
          sty="list-style:none; h4{color:#007BFF;margin:.5em 0;text-align:center;}"
          imgHeight={view>= 768 && '50dvh'}
          flex="service"
        />
      </Frame>
    </>
  );
}
