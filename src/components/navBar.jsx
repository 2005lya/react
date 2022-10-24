import React, { Component } from 'react'

class NavBar extends Component {
    render() { 
        return (
            <nav className='navbar navbar-light bg-light'>
                <a className='navbar-brand' href="#">NavBar
                <span className="badge dadge-pill badge-secondary" style={{color: 'red'}}>{this.props.totalCounters}</span>
                </a>
            </nav>
        );
    }
}
 
export default NavBar;