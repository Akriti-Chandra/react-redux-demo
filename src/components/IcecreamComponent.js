import { buyIcecream } from "../redux/icecream/IcecreamAction"
import { connect } from "react-redux"

const IcecreamComponent = (props)=>{
    return (
        <div>
            <h1>no of icecream -{props.noOfIcecream}</h1>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        noOfIcecream : state.icecream.noOfIcecream
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        buyIcecream :()=> dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamComponent)