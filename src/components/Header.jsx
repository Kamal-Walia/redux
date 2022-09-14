import React from 'react'
import {connect} from 'react-redux'


class Header extends React.Component{
    render(){
        return(
            <div>Count</div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        count:state.count
    }
}

const mapDispatchtoProps = {}

export default connect(mapStateToProps, mapDispatchtoProps)(Header);