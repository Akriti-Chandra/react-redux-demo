import {BUY_CAKE} from './CakeTypes';

const initialSate = {
    noOfCakes:10
}

const CakeReducer=(state=initialSate,action)=>{
    switch(action.type){
        case BUY_CAKE :
            return{
            ...state,
           noOfCakes: state.noOfCakes -action.payload
        }
        default: return state
    }
}
export default CakeReducer