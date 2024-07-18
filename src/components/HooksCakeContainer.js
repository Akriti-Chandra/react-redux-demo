import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cakes/CakeAction";
const HooksCakeContainer = ()=>{
    const noOfCakes = useSelector(state=> state.cake.noOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No Of Cakes-{noOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}
export default HooksCakeContainer;