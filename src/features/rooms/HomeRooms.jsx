/* eslint-disable react/prop-types */
import styled from "styled-components";
import FlexItem from "../../ui/FlexItem";
import RoomDisplay from "./RoomDisplay";
import { roomList } from "../../helper/data";
import HomeRoom from "./HomeRoom";
import { luxDis } from "../../helper/files";


// FETCH DATA FROM THE ONLINE AND MAKE IT RANDOMLY DISPLAY THE DIFFERENT ROOMS FOR EVERY 5 SECS

const StyledRooms = styled.div`
  padding: 2em 1.5em;
`;

export default function HomeRooms() {
  return (
    <StyledRooms>
      <h3>Our Rooms</h3>
      <RoomDisplay title={'luxurious'} amount={'2000000'} image={luxDis} />
      <FlexItem direct="column">
        {roomList.map((ele) => (
          <HomeRoom key={ele.label} ele={ele} />
        ))}
      </FlexItem>
    </StyledRooms>
  );
}
