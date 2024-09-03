import {} from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Frame from "../../components/Frame";
import styled from "styled-components";

const StyledCardSkeleton = styled.div`
  margin: 3em 6em 0;
  box-shadow: 1px 1px 5px #b6b6ca;
  padding: 1em;
  background-color: #fff;

  @media (max-width: 768px) {
    margin: 0;
    box-shadow: none;
    padding: 0em;
  }

  .up {
    margin: 0 1em;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5em;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  

  .left,
  .right {
    width: 45%;
    padding: 1em;
    @media (max-width: 768px) {
      width: inherit;
      padding: 0;
    }
  }

  .left {
    height: 40dvh;
  }
  /* .hate{
  width:50%;
} */
`;
export default function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <Frame bg="#fff" key={i}>
        <StyledCardSkeleton>
          <div className="up">
            <Skeleton circle width={40} height={40} />
          </div>
          <Container>
            <div className="left">
              <Skeleton count={10} />
            </div>
            <div className="right">
              <Skeleton count={10} />
            </div>
          </Container>
        </StyledCardSkeleton>
      </Frame>
    ));
}
