import styled from "styled-components";
import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa"; // Calendar icon

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #33333375;
  border-radius: 0.5rem;
  background-color: #fff;
`;
const DateButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  color: #52A5FF;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  color: ${(prop) => prop.color};
`;

const Label = styled.span`
  /* color: red; */
`;

const DisplayText = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

export default function DateRangePicker({dateRange, setDateRange}) {
  const [startDate, endDate] = dateRange;

  const ExampleCustomInput = forwardRef(({ onClick, className }, ref) => (
    <DateButton className={className} onClick={onClick} ref={ref}>
      <FaCalendarAlt />
    </DateButton>
  ));

  ExampleCustomInput.displayName = "ExampleCustomInput";
  return (
    <Container>
      <Column color="#333">
        <Label>Check in</Label>
        <DisplayText>{startDate?.toLocaleDateString()}</DisplayText>
      </Column>
      <Column color="#52A5FF">
        <Label>Check out</Label>
        <DisplayText>{endDate?.toLocaleDateString()}</DisplayText>
      </Column>
      <DatePicker
        // selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update)}
        customInput={<ExampleCustomInput />}
        selectsRange
        withPortal
      />
    </Container>
  );
}
