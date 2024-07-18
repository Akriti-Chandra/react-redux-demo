import { connect } from "react-redux"
const ItemContainer = (props)=>{
    return(
        <h1>Item -{props.item}</h1>
    )
}

const mapStateToProps = (state,ownProps)=>{
    const itemState = ownProps.cake? state.cake.noOfCakes: state.icecream.noOfIcecream
return {item: itemState}
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    const dispatchFuncton = ownProps
}
export default connect(mapStateToProps)(ItemContainer);