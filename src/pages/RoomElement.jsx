/* eslint-disable react/prop-types */

import RoomItem from "../features/rooms/RoomItem";
import { useRooms } from "../features/rooms/useRooms";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import StyledHeader from "../ui/Header";
import { roomList, utilList } from "../helper/data";
import HomeRoom from "../features/rooms/HomeRoom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    /* flex-wrap: wrap;
    flex-direction: row; */
    /* gap: 3em; */
    /* align-items: center; */
    /* justify-content: center; */
  }
`;

export default function RoomElement({ name }) {
  const { data, isLoading, error } = useRooms(name);

  const title = name.split("-").join(" ");



  if (isLoading) return <p>lover</p>;
  if (error) return <Error msg={error.message} />;
  // if (!data) return <p>no data</p>;

  const roomFilter = roomList.filter(
    (ele) => !ele.label.toLowerCase().includes(name)
  );

  return (
    <>
      <StyledHeader>{title} hostels</StyledHeader>



     {isLoading ? <Spinner/>: <StyledContainer>
        {data?.map((ele, index) => (
          <RoomItem
            key={ele.id}
            data={utilList}
            ele={ele}
            index={index}
            name={name}
          />
        ))}
      </StyledContainer>}

        {/* <FlexItem> */}

      {roomFilter.map((ele) => (
        <HomeRoom key={ele.label} ele={ele} />
      ))}
      {/* </FlexItem> */}
    </>
  );
}
