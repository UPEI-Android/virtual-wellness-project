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
                         
                            <form className="form-control"action="#" >
                            {/* THis is what it was but we are not handling submit until front and back end connected
                            <form className="form-control" action="#" onSubmit={(handleSubmit)}>*/}
                              <div className="form-group">
                              <label className="form-input-label">Title</label>
                                  <input
                                    type="text"
                                    defaultValue={todoInput}
                                    className="form-input-block"
                                    placeholder="Enter Treatment Title Here..."
                                  />
                              </div>
                              <div className="form-group">
                                <label className="form-input-label">Description:</label>
                                <textarea
                                  type="text"
                                  defaultValue={todoInput}
                                  rows="4"
                                  cols="80"
                                  className="form-input-block"
                                  placeholder="Enter Treatment Description Here..."
                                />
                              </div>
                              <div className="form-group">
                                <label className="form-input-label">Start Date:</label>
                                <input
                                    type="date"
                                    className="form-input-block"
                                  />
                              </div>
                              <div className="form-group">
                                <label className="form-input-label">End Date:</label>
                                <input
                                    type="date"
                                    className="form-input-block"
                                  />
                              </div>

                              <div className="form-group">
                                <label className="form-input-label">Start Time:</label>
                                <input
                                    type="time"
                                    className="form-input-block"
                                  />
                              </div>
                              <div className="form-group">
                                <label className="form-input-label">End Time:</label>
                                <input
                                    type="time"
                                    className="form-input-block"
                                  />
                              </div>
                              {/*
                              <div>
                                <label className="col-form-label-lg">Recurring?</label>
                                <input type="checkbox" style={{"margin-left":"10px"}}/>
                              </div>
                              */}

                            </form>
                            <button type="submit" className="btn-primary" >
                                Create Treatment
                            </button>
                            

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
