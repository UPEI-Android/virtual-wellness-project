import React from 'react';
import { useState } from 'react';

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
    )

}