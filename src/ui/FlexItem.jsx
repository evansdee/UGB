import styled, { css } from "styled-components";

const FlexItem = styled.div`
  display: flex;
  gap: ${(prop) => (prop.gap ? `${prop.gap}em` : "")};
  flex-direction: ${(prop) => prop.direct || "row"};
  /* flex-direction: ${(prop) => prop.direct === "column" && "column"}; */
  justify-content: ${(prop) => {
    switch (prop.just) {
      case "between":
        return "space-between";
      case "around":
        return "space-around";
      case "center":
        return "center";
      default:
        return "flex-start";
    }
  }};
  ${(prop) =>
    prop.align &&
    css`
      align-items: center;
    `};
  width: ${(prop) => prop.width && `${prop.width}%`};

  @media (min-width: 768px) {
    flex-direction: ${(prop) => (prop.view === "true" && "column" )};
  }
`;

FlexItem.defaultProps = {
  direct: "row",
  just: "flex-start",
};

export default FlexItem;
