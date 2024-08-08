/* eslint-disable react/prop-types */
import styled from "styled-components";
import FlexItem from "../../ui/FlexItem";
import RoomDisplay from "./RoomDisplay";
import { roomList } from "../../helper/data";
import HomeRoom from "./HomeRoom";
import { luxDis } from "../../helper/files";
import { useView } from "../../hooks/useView";


// FETCH DATA FROM THE ONLINE AND MAKE IT RANDOMLY DISPLAY THE DIFFERENT ROOMS FOR EVERY 5 SECS

const StyledRooms = styled.div`
  padding: 2em 1.5em;
  position: relative;

  @media(min-width:768px){
    padding: 2em 2.5em;
    background:url(${luxDis}) no-repeat center center;

    h3{
      position: relative;
      z-index: 5;
      color: #fff;
    }

    &::after{
      content:'';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: .8;
    }
  }
`;



export default function HomeRooms() {

  const {view} = useView()
  console.log(view)
  return (
    <StyledRooms>
      <h3>Our Rooms</h3>
      <RoomDisplay title={'luxurious'} amount={'2000000'} image={luxDis} />
      <FlexItem direct={view <= 768 ? 'column' : null} >
        {roomList.map((ele) => (
          <HomeRoom key={ele.label} ele={ele} />
        ))}
      </FlexItem>
    </StyledRooms>
  );
}
