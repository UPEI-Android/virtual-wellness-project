import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavItem from './NavItem';

export default class SideBarNav extends Component {
    render(){
        return (
            <div className="sidebar">
                <ul class="nav flex-column">
                    <NavItem title = "My Profile" link='/userprofile/{id}'/>
                    <NavItem title = "Treatments" link="/treatments" />
                    <NavItem title = "option 3" link='#'/>
                    <NavItem title = "option 4" link='#'/>
                </ul>
            </div>
        );
    }   
}

if (document.getElementById('sidebarnav')) {
    ReactDOM.render(<SideBarNav />, document.getElementById('sidebarnav'));
}
