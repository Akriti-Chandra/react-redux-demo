import {useState} from 'react'
import { buyCake } from "../redux/cakes/CakeAction"
import {connect} from "react-redux"
 
 const NewCakeContainer=(props)=>{
    const [number,setNumber] = useState(2)
    return (
        <div>
            <h1>No of Cakes-{props.noOfCakes}</h1>
            <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        noOfCakes: state.cake.noOfCakes
    }
}
const mapDispatchToProps = dispatch=>{
  
    return {
        buyCake : number=> {
            dispatch(buyCake(number))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)