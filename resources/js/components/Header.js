import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
    render(){
        let title = document.getElementById('header').getAttribute('data-title')
        return (
            <nav class="navbar navbar-expand-md navbar-light shadow-sm">
                <div class="container">
                    <a href="/home" class="navbar-brand" >
                        { title }
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto"></ul>

                        <ul class="navbar-nav ms-auto">
                            
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}


  
if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}

