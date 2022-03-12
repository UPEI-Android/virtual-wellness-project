import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function TreatmentForm (props) {
    const[todoInput, setTodoInput] = useState('');
    

    function handleInput(event){
        setTodoInput(event.target.value);
      }

    function handleSubmit(event){
        event.preventDefault();
        if(todoInput.trim().length === 0){
        return;
        }
        props.addTodo(todoInput)
        setTodoInput('');
    }

    return(
    <form className="form-control" action="#" onSubmit={(handleSubmit)}>
                          <h2 className="col-form-label">
                            <label htmlFor="new-todo-input" className="form-label">
                              Add a Task:
                            </label>
                          </h2>
                          
                          <input
                            type="text"
                            value={todoInput}
                            onChange={handleInput}
                            className="input-group"
                            placeholder="Enter Your Task Here"
                          />
                          <button type="submit" className="btn-primary">
                           Add
                          </button>
     </form>
    )

}