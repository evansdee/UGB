import styled from "styled-components";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useState } from "react";
import DateButton from "../../components/DateButton";
import { formatDate } from "../../helper/helper";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-height: 95vh; */
  background-color: #f1f5f9;
  margin: 1rem 0;
  padding: 1rem;

  @media(min-width:768px){
    background-color: transparent;
  }
`;

const FormWrapper = styled.div`
  background-color: #002C5C;
  color: #fff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 100%;
  max-width: 24rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h3`
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: #fff;
  color: #000;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: #fff;
  color: #000;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: #fff;
  color: #000;
  height: 6rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 0.75rem;
  color: #28282b;
  top: 50%;
  z-index: 4;
  transform: translateY(-50%);
`;

const Button = styled.button`
  width: 100%;
  background-color: #fff;
  color: #002C5C;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #059669;
  }
`;

export default function Book() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  function handleSubmit(e){
    e.preventDefaults()
  }
  return (
    <Container id='book'>
      <FormWrapper >
        <Title>Drop a Message</Title>
        <Subtitle>Book For Inspection</Subtitle>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input type="text" placeholder="First Name" />
            <IconWrapper>
              <FaUser />
            </IconWrapper>
          </InputWrapper>
          <InputWrapper>
            <Input type="text" placeholder="Last Name" />
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
            <Input type="tel" placeholder="Phone Number" />
            <IconWrapper>
              <FaPhone />
            </IconWrapper>
          </InputWrapper>
          <InputWrapper>
            <Select>
              <option>Room Selected</option>
            </Select>
            {/* <IconWrapper>
              <FaChevronDown />
            </IconWrapper> */}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Appointment Date"
              value={endDate &&`${formatDate(startDate)} - ${formatDate(endDate)}`}
              disabled={endDate}
            />
            <IconWrapper>
              <DateButton all={[startDate, endDate, setDateRange]}>
                <FaCalendarAlt />
              </DateButton>
            </IconWrapper>
          </InputWrapper>
          <Textarea placeholder="Message"></Textarea>
          <Button type="submit">
            Done
            <FaArrowRight />
          </Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}
