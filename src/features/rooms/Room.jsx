/* eslint-disable react/prop-types */

import styled from "styled-components";
import { formatToNaira } from "../../helper/helper";
import Spinner from "../../ui/Spinner";
import { useRoom } from "./useRoom";
import Jumbotron from "../../components/Jumbotron";
import FlexItem from "../../ui/FlexItem";
import Frame from "../../components/Frame";
import { roomChildList } from "../../helper/data";
import HotelCarousel from "../../HotelCarousel";
import RoomDisplay from "./RoomDisplay";
import Button from "../../ui/Button";
import Book from "./Book";
import { useView } from "../../hooks/useView";
import Skeleton from "react-loading-skeleton";
import { useStateContext } from "../../state/StateContext";

const StyledRoom = styled.div`
  /* background-color: #28282b; */
`;

const Header = styled.div`
  text-align: center;
  width: 100%;
  font-family: "Sansita One";
`;

const All = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    /* height: 100dvh; */
  }

  .left,
  .right {
    @media (min-width: 768px) {
      width: 45%;
    }
  }
`;

export default function Room({ name }) {
  const { data = {}, isLoading } = useRoom(name);
  const { isView } = useView();

  const { dispatch } = useStateContext();

  // console.log(typeof state.amount);

  const { img, label, description, currentPrice, oldPrice } = data;

  if (isLoading) return <Spinner />;

  function handleUpdate() {
    dispatch({
      type: "updateRoom",
      payload: { img, amount: currentPrice,label },
    });
  }

  const arr1 = roomChildList.filter((ele) => typeof ele === "string");
  const arr2 = roomChildList.filter((ele) => typeof ele === "object").at(0);
  return (
    <StyledRoom>
      <Jumbotron img={img[0]} imgHeight={isView && "100dvh"} sty={"true"}>
        <Header>
          <FlexItem direct="column" gap="1">
            <h2>MODERN ROOM</h2>
            <h3>{label || <Skeleton count={2} />}</h3>
            <p>Your Home away from home</p>
          </FlexItem>
        </Header>
      </Jumbotron>

      <Frame bg={"#28282b"}>
        <All>
          <div className="right">
            <HotelCarousel data={img} content="true" />

            <Frame.Title
              label={"Description"}
              txtAlign={"center"}
              color={"#fff"}
            />
            <Frame.Description txtAlign={"justify"} sty={"color:#fff;"}>
              {description}
              <br />
              <br />
              Acquire your very own unit in our self-contain apartment,
              featuring stunning ocean views, located on Alexander Road in the
              heart of Calabar.
              <br />
              <br />
              Explore the lavish details and exceptional living opportunities
              that await you at Self-Con by The Address Homes.
            </Frame.Description>
            <Frame.List data={arr1} sty={"color:#fff;padding:.5em 2em;"} />
            <Frame.List
              data={arr2}
              sty={"margin:2rem 0;color:#fff;padding:0 2em; "}
            />
            <FlexItem just="between">
              <Frame.Description sty={"color:#fff;"}>
                First Year
              </Frame.Description>
              <Frame.Description sty={"color:#FFA500;"}>
                {formatToNaira(currentPrice)}
              </Frame.Description>
            </FlexItem>
            <FlexItem just="between">
              <Frame.Description sty={"color:#fff;"}>
                Subsequent Year
              </Frame.Description>
              <Frame.Description sty={"color:#FFA500;"}>
                {formatToNaira(oldPrice)}
              </Frame.Description>
            </FlexItem>
          </div>

          <div className="left">
            <Book />
          </div>
        </All>
      </Frame>
      <Frame>
        <RoomDisplay
          image={img[1]}
          title={name}
          amount={currentPrice}
          clr="true"
        />
        <FlexItem direct="column" gap="1" align="center">
          <Button
            color="#002C5C"
            bg="#fff"
            href="#book"
            extra="width:fit-content;border-radius:20px;"
          >
            Book for Inspection
          </Button>
          <Button
            color="#fff"
            bg="#007BFF"
            to={"/booking"}
            extra="width:fit-content;border-radius:20px"
            onClick={handleUpdate}
          >
            Pay for room
          </Button>
        </FlexItem>
      </Frame>
    </StyledRoom>
  );
}
