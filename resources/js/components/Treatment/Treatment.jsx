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
                            "this will connect to db to pull data for such a treatment"

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