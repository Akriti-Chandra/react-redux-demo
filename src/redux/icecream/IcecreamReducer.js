import { BUY_ICECREAM } from "./IcecreamTypes"

const initialState ={
    noOfIcecream: 20
}

const IcecreamReducer = (state= initialState, action)=>{
    switch(action.Type){
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIcecream: state.noOfIcecream -1
            }
        default: return state
    }
}

export default IcecreamReducer;