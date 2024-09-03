// ButtonIcon.jsx
import styled from "styled-components";

// Styled component for the button
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.bg || "#007BFF"}; // Default color or custom
  color: ${(props) => props.color || "#0054AD"}; // Default text color or custom
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1.5em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* &:hover {
    background-color: ${(props) =>
    props.hoverBg || "#0056b3"}; // Change on hover
  } */

  &:focus {
    outline: none;
  }

  &:disabled {
    color: #a5a4a4;
  }
`;

// ButtonIcon component
const ButtonIcon = ({
  children,
  onClick,
  bg,
  color,
  hoverBg,
  disabled,
  className,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      bg={bg}
      color={color}
      hoverBg={hoverBg}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonIcon;
