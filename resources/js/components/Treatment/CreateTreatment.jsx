import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import TreatmentForm from './TreatmentForm';

export default function CreateTreatment(props) {
    return (
        <div className="container background" style={{"padding-top":"5%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card" style={{"padding": "60px"}}>
                        <div className="card-header">New Treatment</div>
                            <TreatmentForm />
                            {
                                /*
                                <TreatmentForm addTodo={addTodo} completeTodo={completeTodo}/>
                                */
                            }
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('create-treatment')) {
    const element = document.getElementById('create-treatment')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<CreateTreatment {...props} />, element);
}