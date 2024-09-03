

import { useEffect } from 'react'
import Frame from '../../components/Frame'
import HotelCarousel from '../../HotelCarousel'
import FlexItem from '../../ui/FlexItem'
import { MdOutlineDateRange } from 'react-icons/md'
import { formatToNaira } from '../../helper/helper'
import ButtonIcon from '../../ui/ButtonIcon'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function SummaryDisplay({state,dispatch}) {
    const navigate = useNavigate();
    const {
        gallery,
        roomType: label,
        startDate,
        endDate,
        quantity,
        amount,
      } = state;
      useEffect(() => {
        if (!label.length) navigate("/rooms");
      }, [label, navigate]);
    
      function handleCount(value){
        dispatch({type:value})
      }
  return (
    <>
    <Frame bg="#fff" direction="bottom" sty={"padding-bottom:0em;"}>
        <HotelCarousel data={gallery} content="true" />

        <Frame.Title
          label={label}
          sty={"text-align:left; font-size:1em!important;"}
        />
        <Frame.Title
          sty={"font-size:.8em!important;text-align:left;font-weight:100;"}
        >
          <FlexItem align="center" gap=".5">
            <MdOutlineDateRange />
            <span>
              {startDate} - {endDate}
            </span>
          </FlexItem>
        </Frame.Title>

        <Frame.Title sty={"font-size:1em!important;"}>
          <FlexItem just="between" align="center">
            <div className="amount">
              {quantity} x {formatToNaira(amount)}
            </div>

            <div className="count">
              <FlexItem align="center">
                <ButtonIcon bg="transparent" onClick={()=>handleCount('dec')} disabled={quantity<2}>
                  <AiFillMinusCircle />
                </ButtonIcon>

                {quantity}
                <ButtonIcon bg="transparent" onClick={()=>handleCount('inc')}>
                  <AiFillPlusCircle />
                </ButtonIcon>
              </FlexItem>
            </div>
          </FlexItem>
        </Frame.Title>
      </Frame> 
    </>
  )
}
