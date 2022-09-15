import React from 'react'
import {connect} from 'react-redux'


class Body extends React.Component{
    render(){
        return(
            <div>
                <button>Increase Count</button>
                <button>Decrease Count</button>
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
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);