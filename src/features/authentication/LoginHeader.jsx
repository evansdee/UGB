import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Body, StyledAuthHeader,Header,SocialBtn,DividerText,Divider } from "./SIgnupHeader";

export default function LoginHeader() {
  return (
    <StyledAuthHeader>
    <Body>
      <Header>
        <h1>Log in to UGB hotels</h1>
        <p>Log in to get personalized content and quick booking</p>
      </Header>
      <SocialBtn>
        <button>
          <FcGoogle />
          Log in with Google
        </button>
        <button>
          <FaFacebook />
          Log in with Facebook
        </button>
      </SocialBtn>{" "}
      <Divider>
        <hr />
        <DividerText>Or</DividerText>
        <hr />
      </Divider>
    </Body>
  </StyledAuthHeader>
  )
}
