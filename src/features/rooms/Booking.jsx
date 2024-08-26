import styled from "styled-components";
import Frame from "../../components/Frame";
import { FaUser, FaEnvelope } from "react-icons/fa";
import DateRangePicker from "./DateRangePicker";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import Button from "../../ui/Button";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 0.5rem;
  /* padding: 1.5rem; */
  width: 100%;
  max-width: 24rem;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 2;

  color: ${(prop) => prop.color};
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #33333375;
  border-radius: 0.5rem;
  background-color: #fff;
`;
const Label = styled.span`
  /* color: red; */
`;
const DisplayText = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
`;

export default function Booking() {
  return (
    <>
      <Frame direction={"bottom"} bg="#fff">
        <FormWrapper>
          <DateRangePicker />
          <Container>
            <Column>
              <Label>Occupancy</Label>
              <DisplayText>
                <Input />
              </DisplayText>
            </Column>
            <FaUser />
          </Container>
          <Container>
            <Column>
              <Label>Phone Number</Label>
              <DisplayText>
                <Input />
              </DisplayText>
            </Column>
            <MdOutlinePhoneAndroid />
          </Container>
          <Button color="#fff" bg="#007BFF" extra="border-radius:8px;">
            Continue
          </Button>
        </FormWrapper>
      </Frame>
    </>
  );
}
