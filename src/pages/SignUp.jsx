import {} from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import ButtonIcon from "../ui/ButtonIcon";
import SignupForm from "../features/authentication/SignupForm";
import { SignupHeader } from "../features/authentication/SIgnupHeader";
import { useNavigate } from "react-router-dom";

export const StyledAuth = styled.div`
  display: flex;
  position: relative;

  .closeIcon {
    position: absolute;
    top: 5%;
    right: 5%;
  }
`;
export const FormContainer = styled.div`
  height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;
export const Main = styled.div`
  height: 70dvh;
`;

export const AuthImage = styled.div`
  @media (max-width) {
    display: none;
  }
`;

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <StyledAuth>
      <FormContainer>
        <Main>
          <SignupHeader />
          <SignupForm />
        </Main>
        <ButtonIcon
          bg="transparent"
          className={"closeIcon"}
          onClick={() => navigate("/home")}
        >
          <MdClose />
        </ButtonIcon>
      </FormContainer>

      <AuthImage></AuthImage>
    </StyledAuth>
  );
}
