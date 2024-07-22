import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
const StyledDatePicker = styled(DatePicker)`
  flex: 1;
  margin: 0 10px;

  .react-datepicker {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .react-datepicker__header {
    background-color: #007bff;
    color: white;
    border-radius: 8px 8px 0 0;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-range {
    background-color: #007bff;
    color: white;
  }

  .react-datepicker__day:hover {
    background-color: #0056b3;
    color: white;
  }
`;

const Button=styled.button`
outline: none;
border: none;
cursor: pointer;
`

export default function DateButton({ all, children }) {
  //   const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  //   console.log(dateRange)
  return (
    <>
      <Button onClick={handleClick}>
        {children}
      </Button>
      {isOpen && (
        <StyledDatePicker
          selectsRange={true}
          startDate={all[0]}
          endDate={all[1]}
          onChange={(update) => {
            all[2](update);
            if (all[0]) setIsOpen(!isOpen);
          }}
          disabled={all[1]}
          withPortal
          inline
        />
      )}
    </>
  );
}
