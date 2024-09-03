/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const inputStyle = css`
  padding: 0.5em;
  width: 100%;
  outline: none;
  border: 1px solid #28282b;
  border-radius: 6px;
  margin: 1em 0;
`;

const StyledInput = styled.input`
  ${inputStyle};
  ${(prop) => prop.sty}
`;

const TextArea = styled.textarea`
  ${inputStyle}
`;

export default function InputField({
  type = "text",
  change,
  value,
  placeholder,
  textArea,
  cols,
  rows,
  sty,
}) {
  if (textArea)
    return (
      <TextArea
        value={value}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
      ></TextArea>
    );
  return (
    <>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        sty={sty}
        onChange={change}
      />
    </>
  );
}
