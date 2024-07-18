import { combineReducers } from "redux";
import CakeReducer from "./cakes/CakeReducer";
import IcecreamReducer from "./icecream/IcecreamReducer";

const rootReducer = combineReducers({
    cake:CakeReducer,
    icecream: IcecreamReducer
})
export default rootReducer