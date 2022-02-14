import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavItem from './NavItem';

export default class SideBarNav extends Component {
    render(){
        return (
            <div className="sidebar navbar-expand-md offcanvus">
                <NavItem />
                <NavItem />
            </div>
        );
    }   
}

if (document.getElementById('sidebarnav')) {
    ReactDOM.render(<SideBarNav />, document.getElementById('sidebarnav'));
}
