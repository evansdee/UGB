import { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const FAQContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5em 1.5em 3em;
  background-color: #dcedff;
`;

const FAQItem = styled.div`
  margin-bottom: 10px;
`;

const StyledHeader = styled.h1`
  /* border: 1px solid #28282b22; */
  display: table;
  font-size: 1.3em;
  padding: 0.5em;
  margin: 0 0 1em;
`;
const FAQQuestion = styled.div`
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const FAQAnswer = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-top: none;
  background-color: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const IconWrapper = styled.div`
  margin-left: 1em;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Where is Logdix located?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "Where is Logdix located?",

      answer:
        "A component is a reusable piece of code that defines part of a user interface.",
    },
    {
      question: "Where is Logdix located?",

      answer:
        "State is an object that represents the parts of the app that can change.",
    },
    {
      question: "Where is Logdix located?",

      answer:
        "Props are inputs to components. They are data passed down from a parent component to a child component.",
    },
    {
      question: "Where is Logdix located?",

      answer:
        "Hooks are functions that let you use state and other React features in functional components.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <StyledHeader>FAQ</StyledHeader>
      {faqItems.map((item, index) => (
        <FAQItem key={index}>
          <FAQQuestion onClick={() => toggleFAQ(index)}>
            {item.question}
            <IconWrapper>
              {openIndex === index ? <FaTimes /> : <FaChevronDown />}
            </IconWrapper>
          </FAQQuestion>
          {openIndex === index && <FAQAnswer>{item.answer}</FAQAnswer>}
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
