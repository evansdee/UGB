import styled from "styled-components";
import Frame from "../components/Frame";
import { FaUser, FaEnvelope } from "react-icons/fa";
import DateRangePicker from "../features/rooms/DateRangePicker";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { useStateContext } from "../state/StateContext";
import { toast } from "react-toastify";
import { format } from "date-fns";
import BookingComponent from "../features/rooms/BookingComponent";
import { useNavigate } from "react-router-dom";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 0.5rem;
  /* padding: 1.5rem; */
  width: 100%;
  position: relative;
  z-index: 3;
  max-width: 24rem;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 1;

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
  
  gap: 0.5em;
`;
const Label = styled.span`
  /* color: red; */
`;
const DisplayText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  /* flex: 1; */
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
`;

export default function Booking() {
  const {
    dispatch,
    state: { roomType: label },
  } = useStateContext();
  
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [inputField, setInputField] = useState("");
  const navigate = useNavigate();
  // console.log(label);

  useEffect(() => {
    if (!label.length) navigate("/rooms");
  }, [label, navigate]);

  function handleUpdate() {
    if (!inputField.length || dateRange.includes(null) || !label.length) {
      // console.log(1);
      toast.info("Input fields required");
      dispatch({type:'reset'})
    } else {
      dispatch({
        type: "updateBooking",
        payload: {
          gsm: inputField,
          start: format(startDate, `eee do MMMM, yyyy`),
          end: format(endDate, `eee do MMMM, yyyy`),
        },
      });

      navigate("/summary");
    }
  }
  return (
    <>
      <Frame direction={"bottom"} bg="#fff">
        <FormWrapper>
          <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
          <Container>
            <Column>
              <Label>Occupancy</Label>
              <DisplayText>
                <Input value={label} readOnly />
              </DisplayText>
            </Column>
            <FaUser />
          </Container>
          <Container>
            <Column>
              <Label>Phone Number</Label>
              <DisplayText>
                <Input
                  value={inputField}
                  onChange={(e) => setInputField(e.target.value)}
                />
              </DisplayText>
            </Column>
            <MdOutlinePhoneAndroid />
          </Container>
          <Button
            color="#fff"
            bg="#007BFF"
            extra="border-radius:8px;"
            onClick={handleUpdate}
          >
            Continue
          </Button>
        </FormWrapper>
      </Frame>
      <BookingComponent />
    </>
  );
}
