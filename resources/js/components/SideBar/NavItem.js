import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class NavItem extends Component {
    render(){
        return (
            <div className="sidebar-nav-item">
                test
            </div>
        );
    }   
}

if (document.getElementById('nav-item')) {
    ReactDOM.render(<NavItem />, document.getElementById('nav-item'));
}

