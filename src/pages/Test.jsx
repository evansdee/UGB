import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import Modal from 'react-modal';
import styled, { keyframes } from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import DateButton from '../components/DateButton';
import { formatDate } from '../helper/helper';

// Set the app element for accessibility
Modal.setAppElement('#root');

// Keyframes for modal animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled(Modal)`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: ${fadeIn} 0.3s ease-out;

  .ReactModal__Overlay {
    /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.h2`
  margin-top: 0;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;

const DatePickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

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

const CloseButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  display: block;
  width: 100%;
  margin: 20px auto 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SelectedDates = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const SelectedDatesHeader = styled.h4`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const SelectedDatesText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const DatePickerModal = ({ isOpen, onRequestClose }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Select Dates"
      className="Modal"
      overlayClassName="ReactModal__Overlay"
    >
      <Header>Select Check-in and Check-out Dates</Header>
      <DatePickerContainer>
     
     
      </DatePickerContainer>
      <CloseButton onClick={onRequestClose}>Close</CloseButton>
    
    </StyledModal>
  );
};



export default function Test() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
 

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Select Dates</button>
      <DatePickerModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
      <DateButton all={[startDate,endDate,setDateRange]}/>
      <input type="text" value={`${formatDate(startDate)} - ${formatDate(endDate)}`} />
    </div>
  );
}
