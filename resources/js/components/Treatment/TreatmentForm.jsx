import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

export default function TreatmentForm (props) {
    const[todoInput, setTodoInput] = useState('');

    function handleInput(event){
        setTodoInput(event.target.value);
      }
{/*
    function handleSubmit(event){
        event.preventDefault();
        if(todoInput.trim().length === 0){
        return;
        }
        props.addTodo(todoInput)
        setTodoInput('');
    
    */
      }

    return(

      <div className="container background" style={{"padding-top":"5%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card" style={{"padding": "60px"}}>
                        <div className="card-header">New Treatment</div>
                         
                            <form className="form-control" action="#" >
                            {/* THis is what it was but we are not handling submit until front and back end connected
                            <form className="form-control" action="#" onSubmit={(handleSubmit)}>*/}
                            
                                                  
                                                  <input
                                                    type="text"
                                                    value={todoInput}
                                                    onChange={handleInput}
                                                    className="input-group"
                                                    placeholder="Enter Your Treatment Here"
                                                  />
                                                  <button type="submit" className="btn-primary">
                                                  Create Treatment
                                                  </button>
                            </form>

                            {
                                /*
                                <TreatmentForm addTodo={addTodo} completeTodo={completeTodo}/>
                                */
                            }
                    </div>
                </div>
            </div>
        </div>
    )

}

if (document.getElementById('treatment-form')) {
  const element = document.getElementById('treatment-form')
  const props = Object.assign({}, element.dataset )
  ReactDOM.render(<TreatmentForm {...props} />, element);
}