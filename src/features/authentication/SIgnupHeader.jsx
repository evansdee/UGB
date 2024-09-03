// SignUpButton.js
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

export const StyledAuthHeader = styled.div`

`;


export const Header = styled.div`
  font-family: "Effra";

  h1 {
    font-size: 1.2em;
  }
  p {
    font-size: 0.8em;
    margin: 1.5em 0;
    color: #575757;
  }
`;

export const SocialBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 0.5em 0;

  button {
    padding: 1em 0;
    background-color: transparent;
    border: 2px solid #28282b9e;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    border-radius: 20px;

    svg{
        font-size:1.5em;
        
    }

    &:last-of-type{
        svg{
            color:#1877F2;
        }
    }
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.2rem 0;

  hr {
    flex-grow: 1;
    border: 0;
    border-top: 1px solid var(--color-muted, #ddd);
  }
`;

export const DividerText = styled.span`
  margin: 0 0.5rem;
  color: var(--color-muted-foreground, #666);
`;

export const Body = styled.div`
  text-align: center;
  padding: 0.5em 4em;
`;
export function SignupHeader() {
  return (
    <StyledAuthHeader>
      <Body>
        <Header>
          <h1>Sign up to UGB hotels</h1>
          <p>Sign up to get personalized content and quick booking</p>
        </Header>
        <SocialBtn>
          <button>
            <FcGoogle />
            Sign up with Google
          </button>
          <button>
            <FaFacebook />
            Sign up with Facebook
          </button>
        </SocialBtn>{" "}
        <Divider>
          <hr />
          <DividerText>Or</DividerText>
          <hr />
        </Divider>
      </Body>
    </StyledAuthHeader>
  );
}
