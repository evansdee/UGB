import styled from 'styled-components';

import Input from '../features/authentication/Input';
import Checkbox from '../features/authentication/SignupForm';
import { SignUpButton } from '../features/authentication/SIgnupHeader';

export default function SignUpWidget() {
  return (
    <StyledWidget>
        {/* <StyledDiv> */}
    <StyledDiv>

      <Title>Sign up to UGB hotels</Title>
      <Subtitle>Sign up to get personal content and quick booking.</Subtitle>
    </StyledDiv>

      <ButtonContainer>
        <SignUpButton text="Sign up with Google" className="google" />
        <SignUpButton text="Sign up with Facebook" className="facebook" />
      </ButtonContainer>

      <Divider>
        <hr />
        <DividerText>Or</DividerText>
        <hr />
      </Divider>

      <InputContainer>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
      </InputContainer>

      <Input placeholder="Your Email Address" className="full-width" />

      <Checkbox
        id="terms"
        label="I agree to UGB Terms and Privacy Policy"
      />

      <Checkbox
        id="updates"
        label="I want to be the first to hear about UGB exclusive offers, news events, and updates."
      />

      <SignUpButton text="Sign up" className="signup" />
      {/* </StyledDiv> */}

    </StyledWidget>
  );
}

// Styled Components

const StyledDiv = styled.div`
    

`
const StyledWidget = styled.div`
height: 100dvh;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
gap: 1em;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1rem;
  background-color: var(--color-card, #ffffff);
  border-radius: 0.5rem;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-foreground, #000);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: var(--color-muted-foreground, #666);
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  hr {
    flex-grow: 1;
    border: 0;
    border-top: 1px solid var(--color-muted, #ddd);
  }
`;

const DividerText = styled.span`
  margin: 0 0.5rem;
  color: var(--color-muted-foreground, #666);
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;
