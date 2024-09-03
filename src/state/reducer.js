export const initialState = {
  startDate: "",
  endDate: "",
  gallery: ["jdjd"],
  amount: "400000",
  gsm: "jcnrcnircnir",
  roomType:'evans bill',
  quantity:1
};

export function reducer(state, action) {
  switch (action.type) {
    case "updateRoom":
      return {
        ...state,
        gallery: action.payload.img,
        amount: action.payload.amount,
        roomType: action.payload.label,
        
      };
    case "updateBooking":
        return {...state,
            startDate:action.payload.start,
            endDate:action.payload.end,
            gsm:action.payload.gsm,
        }
    case "updateSummary":
        return {...state,
            amount:action.payload.amount,
            gsm:action.payload.gsm,
        }
    case "dec":
        if(state.quantity<2) return state
        return {
            ...state,quantity:state.quantity - 1
        }
    case "inc":
        // if(state.quantity<2) return
        return {
            ...state,quantity:state.quantity + 1
        }
    case "reset":
        return initialState

    default:
      return initialState;
  }
}
