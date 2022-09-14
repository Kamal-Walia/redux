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

const mapDispatchtoProps = {
    
}

export default connect(mapStateToProps, mapDispatchtoProps)(Body);