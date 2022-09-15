import React from 'react'
import { connect } from 'react-redux'


class Header extends React.Component{
    render(){
        return(
            <div>Count {this.props.count}</div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        count:state.count
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header);