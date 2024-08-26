/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const btnStyle = css`
  background: ${(prop) => prop.bg || "transparent"};
  border: none;
  display: table;
  outline: none;
  padding: ${(prop) => prop.pad || "0.5em"};
  border-radius: ${(prop) => prop.round || "0"};
  color: ${(prop) => prop.color || "#28282b"};
  font-size: ${(prop) => (prop.font ? `${prop.font}em` : "1rem")};
  margin: ${(prop) => (prop.m ? `${prop.m} auto` : "")};
  /* margin:${(prop) => `${prop.m} auto` || ""}; */
  ${(prop) =>
    prop.to &&
    css`
      text-decoration: none;
    `}

  ${(prop) => prop.extra || ""}
`;

const StyledButton = styled.button`
  ${btnStyle}
`;

const StyledLink = styled(Link)`
  ${btnStyle}/* text-decoration: none; */
`;
const StyledNavLink = styled(NavLink)`
  ${btnStyle}/* text-decoration: none; */

  &.active {
    color: red!important;
    font-weight: bold;
  }
`;

const StyledAnchor = styled.a`
  ${btnStyle};
  text-decoration: none;

`;

export default function Button({ children, to, href,nl, ...props }) {
  // export default function Button({ children, to, onClick, bg, font, color,m }) {
  if (to)
    return (
      <StyledLink to={to} {...props}>
        {/* <StyledLink to={to} bg={bg} font={font} color={color} m={m} onClick={onClick}> */}
        {children}
      </StyledLink>
    );

    if(nl) 
      return (
        <StyledNavLink to={to} {...props}>
          {/* <StyledLink to={to} bg={bg} font={font} color={color} m={m} onClick={onClick}> */}
          {children}
        </StyledNavLink>
      );
  if (href) return <StyledAnchor href={href} {...props}>{children}</StyledAnchor>;

  return (
    <StyledButton {...props}>
      {/* <StyledButton onClick={onClick} bg={bg} font={font} color={color}m={m} > */}
      {children}
    </StyledButton>
  );
}
