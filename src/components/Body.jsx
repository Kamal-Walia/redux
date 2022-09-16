import React from 'react'
import {connect} from 'react-redux'
import {incrementCount, decrementCount} from '../store/actions/count'


class Body extends React.Component{
    render(){
        return(
            <div>
                <button onClick={() => this.props.incrementCount(this.props.count + 1)}>Increase Count</button>
                <button onClick={() => this.props.decrementCount(this.props.count - 1)}>Decrease Count</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        count:state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: (newCount) => dispatch(incrementCount(newCount)),
        decrementCount: (newCount) => dispatch(decrementCount(newCount)),
    } 
}

const conectedComponent = connect(mapStateToProps, mapDispatchToProps)

export default conectedComponent(Body);


// connect = (mapStateToProps, mapDispatchToProps) => {
//     const props = mapStateToProps(state);
//     const dispatch = mapDispatchToProps(dispatch);
//     return (Component) => {
//         return <Component props={{...props, ...dispatch}}/>
//     }
// }
