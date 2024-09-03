import { useState } from "react";
import Frame from "../../components/Frame";
import Label from "../../ui/Label";
import InputField from "../../ui/InputField";
import FlexItem from "../../ui/FlexItem";
import styled from "styled-components";
import { formatToNaira } from "../../helper/helper";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  position: relative;
  z-index: 2;
  color: ${(prop) => prop.color || "#28282b"};
  border-bottom: 2px solid #000;
  margin: 0.5em 0;
  padding: 0.5em 0;
  font-weight: bolder;
`;
export default function SummaryTax({ state ,dispatch}) {
  const { quantity, amount,gsm } = state;

  const navigate = useNavigate()

  const tot =parseInt(amount)*quantity
  const tax = Math.ceil((3 * tot) / 100)
  const total = tax + tot;
  const [inp,setInp] = useState(gsm)

  console.log(state);
  console.log(total);

  function handleSubmit(){
    dispatch({type:'updateSummary',payload:{gsm:inp,amount:total}})
    navigate('/payment')
  }
  return (
    <>
      <Frame direction={"top"} sty="padding:2em 1.5em;">
        <FlexItem  gap=".8" direct="column">

        <Label label="Enter Phone Number">
          <InputField sty={"margin:.5em 0;"} value={inp} change={e=>setInp(e.target.value)}/>
        </Label>
        <Label label="Enter Coupon">
          <InputField sty={"margin:.5em 0;"} />
        </Label>
        <StyledDiv>
          <FlexItem align="center" just="between">
            <span>Tax 3%</span>
            <span>{formatToNaira(tax)}</span>
          </FlexItem>
        </StyledDiv>

        <StyledDiv color="var(--color-blue-100)">
          <FlexItem align="center" just="between">
            <span>Total</span>
            <span>{formatToNaira(total)}</span>
          </FlexItem>
        </StyledDiv>
        <Button bg="var(--color-blue-100)" onClick={handleSubmit}>
            Continue
        </Button>
        </FlexItem>
      </Frame>
    </>
  );
}
