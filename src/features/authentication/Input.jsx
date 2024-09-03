// Input.js
import styled from 'styled-components';

export default function Input({ placeholder, className = "" }) {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      className={className}
    />
  );
}

const StyledInput = styled.input`
  border: 1px solid var(--color-border, #ccc);
  padding: 0.5rem;
  border-radius: 0.5rem;
  outline: none;

  &.full-width {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
