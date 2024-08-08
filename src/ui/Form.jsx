import styled from "styled-components";
import InputField from "./InputField";
import Button from "./Button";
import FlexItem from "./FlexItem";

const StyledForm = styled.form`
  width: 100%;
  padding: 1.5em;

  @media(min-width:768px){
    width: 60%;
    margin: 0 auto;

    input,textarea{
      padding: 1em .5em;
    }
  }

  h4 {
    text-align: center;
    color: #007bff;
    font-weight: lighter;
  }
`;

export default function Form() {
  return (
    <StyledForm>
      <h4> GET IN TOUCH</h4>
      <InputField placeholder={"Enter your email address"} />
      <InputField placeholder={"Enter your full name"} />
      <InputField placeholder={"Enter your subject"} />
      <InputField
        textArea={"true"}
        rows={"6"}
        placeholder={"Enter your message"}
      />
      <FlexItem align="center" just="center">
        <Button bg="#007bff" color="#fff" round="5px">
          Send Message
        </Button>
      </FlexItem>
    </StyledForm>
  );
}
