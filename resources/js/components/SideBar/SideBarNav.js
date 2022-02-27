import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavItem from './NavItem';

export default class SideBarNav extends Component {
    render(){
        return (
            <div className="sidebar">
                <ul class="nav flex-column">
                    <NavItem title = "option 1" />
                    <NavItem title = "option 2" />
                    <NavItem title = "option 3" />
                    <NavItem title = "option 4" />
                </ul>
            </div>
        );
    }   
}

if (document.getElementById('sidebarnav')) {
    ReactDOM.render(<SideBarNav />, document.getElementById('sidebarnav'));
}
