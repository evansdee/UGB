// src/HotelLoader.js
import styled, { keyframes } from "styled-components";

import "ldrs/newtonsCradle";

// Default values shown

// Keyframes for the animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled components
const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
`;



const Spinner = () => {
  return (
    <LoaderContainer>
      {/* <Loader>
        <HotelIcon>🏨</HotelIcon>
      </Loader> */}
      <l-newtons-cradle size="78" speed="1.4" color="#007BFF"></l-newtons-cradle>
    </LoaderContainer>
  );
};

export default Spinner;
