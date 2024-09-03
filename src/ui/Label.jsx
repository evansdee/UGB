import styled from "styled-components";

const StyledLabel = styled.label`
/* width: 100%; */
display:block;
position: relative;
z-index: 2;
span{

}
`;
const Error = styled.span`
  font-size: .8rem;
  color: var(--color-red-100);
`;
export default function Label({ children, label,error,id }) {
  return (
    <StyledLabel id={id}>
      {label || ""}
      {/* <br /> */}
      {children}
      {error && <Error>{error}</Error>}
    </StyledLabel>
  );
}
