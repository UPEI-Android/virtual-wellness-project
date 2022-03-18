import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

export default function Treatment(props) {
    return (
        <div className="container background" style={{"padding-top":"5%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card" style={{"padding": "60px"}}>
                        <div className="card-header">Treatment Title</div>
                            <label className="col-form-label-lg">Treatment ID: 00000</label>
                            <label className="form-label">Description:</label>
                            <div className="individual-treatment-form-control" style={{"margin-bottom":"20px"}}>
                                <p className="form-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            {/*
                            <div>
                                <label className="col-form-label-lg">Recurring?</label>
                                <input type="checkbox" style={{"margin-left":"10px"}}/>
                            </div>
                            */}

                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('treatment')) {
    const element = document.getElementById('treatment')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<Treatment {...props} />, element);
}