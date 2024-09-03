import { MdClose } from "react-icons/md";
import ButtonIcon from "../ui/ButtonIcon";
import LoginForm from "../features/authentication/LoginForm";
import LoginHeader from "../features/authentication/LoginHeader";
import { FormContainer, StyledAuth, Main, AuthImage } from "./SignUp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocalUser } from "../hooks/UserDetails";

export default function LoginWidget() {
  const navigate = useNavigate();
  const { value } = useLocalUser();

  useEffect(() => {
    if (value.isAuthenticated) navigate("/home");
  }, [navigate, value.isAuthenticated]);
  return (
    <StyledAuth>
      <FormContainer>
        <Main>
          <LoginHeader />
          <LoginForm />
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
