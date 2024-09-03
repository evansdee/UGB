import {} from "react";
import Frame from "../../components/Frame";
import styled from "styled-components";
import { useStateContext } from "../../state/StateContext";
import { serviceList } from "../../helper/data";

const Container = styled.div`
position: relative;
/* z-index: -5000009090909090; */
  p {
    font-size: 2em;
    color: var(--color-blue-100);
  }

  .overlay {
    height: 70dvh;
    overflow-y: auto;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    margin-top: 1em;
  }
`;

const StyledDiv = styled.div`
  height: 200px;
  /* margin: 1em 0; */
  position: relative;

  h3 {
    content: "";
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -5%);
    width: 90%;
    line-height: 0.8em;
    background-color: #000;
    color: #fff;
    font-size: 1em;
    opacity: 0.5;
    padding: 0.5em;

    span {
      font-size: 0.7em;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export default function BookingComponent() {
  const {
    state: { gallery },
  } = useStateContext();

  // const bk = []

  // console.log(gallery);
  return (
    <>
      <Frame>
        <Container>
          <p>UGB Hostel: book now with the best price guarantee!</p>

          <div className="overlay">
            {serviceList.map((ele) => {
              const desc = ele.desc.split(" ").slice(0, 5).join(" ");
              return (
                <StyledDiv key={ele.label}>
                  <h3>
                    {ele.label}
                    <br />
                    <span>{desc}</span>
                  </h3>
                  <img src={ele.img} />
                </StyledDiv>
              );
            })}
          </div>
        </Container>
      </Frame>
    </>
  );
}
