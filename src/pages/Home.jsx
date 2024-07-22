import HotelCarousel from "../HotelCarousel";
import About from "../components/About";
import CompoundComponent from "../components/CompoundComponent";

import ListElement from "../ui/ListElement";
import FAQ from "../components/Faq";
import { imgs, serviceData } from "../helper/data";
import HomeRooms from "../features/rooms/HomeRooms";

export default function Home() {
  return (
    <>
      <HotelCarousel data={imgs} noContent={"true"} content={"true"} />
      <About />
      <CompoundComponent>
        <CompoundComponent.Header>Our Services</CompoundComponent.Header>
        <CompoundComponent.Title>
          With UGB you have one easy-to-learn system that’s working for you 24x7
        </CompoundComponent.Title>
        <CompoundComponent.List
          render={(ele) => <ListElement key={ele.title} ele={ele} />}
          data={serviceData}
        />
      </CompoundComponent>

      <HomeRooms />
      <FAQ />
    </>
  );
}
