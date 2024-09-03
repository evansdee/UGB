import StyledHeader from "../ui/Header";
import { useStateContext } from "../state/StateContext";

import SummaryDisplay from "../features/summary/summaryDisplay";
import SummaryTax from "../features/summary/summaryTax";

export default function Summary() {
  const { state, dispatch } = useStateContext();

  //   console.log(quantity<2)
  return (
    <>
      <StyledHeader>Summary</StyledHeader>
      <SummaryDisplay state={state} dispatch={dispatch} />
      <SummaryTax state={state} dispatch={dispatch}/>
    </>
  );
}
