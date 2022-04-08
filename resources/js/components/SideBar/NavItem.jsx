import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class NavItem extends Component {
    render(){
        return (
                <div className="sidebar-nav-item">
                    <li className="nav-item">
                        <a className="nav-link" href={this.props.link}>{ this.props.title }</a>
                    </li>
                </div>
        );
    }
}

if (document.getElementById('nav-item')) {
    ReactDOM.render(<NavItem />, document.getElementById('nav-item'));
}

