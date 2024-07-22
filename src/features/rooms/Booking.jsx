import styled from "styled-components";
import Frame from "../../components/Frame";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaCalendarAlt,
    FaArrowRight,
  } from "react-icons/fa";
import DateButton from "../../components/DateButton";

const IconWrapper = styled.div`
  position: absolute;
  right: 0.75rem;
  color: #28282b;
  top: 50%;
  z-index: 4;
  transform: translateY(-50%);
`;
const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: #fff;
  color: #000;
`;
const InputWrapper = styled.div`
  position: relative;
  margin: 1em 0;
  width: 100%;
`;
const FormWrapper = styled.div`
  /* background-color: #002C5C; */
  color: #fff;
  border-radius: 0.5rem;
  /* padding: 1.5rem; */
  width: 100%;
  max-width: 24rem;
`;

export default function Booking() {
  return (
    <>
    <Frame direction={'bottom'} bg='#fff'>
    <FormWrapper >
      
          <InputWrapper>
            <Input type="text" placeholder="First Name" />
            <IconWrapper>
              <FaUser />
            </IconWrapper>
          </InputWrapper>
        
          <InputWrapper>
            <Input type="email" placeholder="Email Address" />
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
          </InputWrapper>
     
      
          <InputWrapper>
            {/* <Input
              type="text"
              placeholder="Appointment Date"
              value={endDate &&`${formatDate(startDate)} - ${formatDate(endDate)}`}
              disabled={endDate}
            /> */}
            <IconWrapper>
              {/* <DateButton all={[startDate, endDate, setDateRange]}>
                <FaCalendarAlt />
              </DateButton> */}
            </IconWrapper>
          </InputWrapper>
        
          </FormWrapper>
    </Frame>
    </>
  )
}
