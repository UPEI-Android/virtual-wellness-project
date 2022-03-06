import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default function List() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([
    {
    id: 1,
    title: 'Your Task Example',
    isComplete: false,
    },
    
  ]);

  const[todoInput, setTodoInput] = useState('');
  const[idForTodo, setidForTodo] = useState(2);

  function addTodo(){
    event.preventDefault();
    if(todoInput.trim().length === 0){
      return;
    }

    setTodos([... todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
      }
    ]);
  setTodoInput('');
  setidForTodo(prevIdForTodo => prevIdForTodo + 1);
  }

  function deleteTodo(id){
    setTodos([... todos].filter(todo => todo.id !== id));
  }

  function handleInput(event){
    setTodoInput(event.target.value);
  }

    return (
      <div className="container background" style={{"padding-top":"5%"}}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card" style={{"padding": "60px"}}>
              <div className="card-header">Your Treatment Tasks</div>
                        <form className="form-control" action="#" onSubmit={(addTodo)}>
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

                        <div className="btn-group" style = {{"vertical-align":"middle"}}>
                          <button type="button" className="btn" aria-pressed="true">
                            <span className="visually-hidden">Show </span>
                            <span>all</span>
                            <span className="visually-hidden"> tasks</span>
                          </button>
                          <button type="button" className="btn" aria-pressed="false">
                            <span className="visually-hidden">Show </span>
                            <span>Active</span>
                            <span className="visually-hidden"> tasks</span>
                          </button>
                          <button type="button" className="btn" aria-pressed="false">
                            <span className="visually-hidden">Show </span>
                            <span>Completed</span>
                            <span className="visually-hidden"> tasks</span>
                          </button>
                        </div>

                        <div className="form-control">
                        <h2 className="form-label">
                          3 tasks remaining
                        </h2>

                        <ul
                          role="list"
                          className="list-stacked"
                          aria-labelledby="list-heading"
                        >
                          { todos.map((todo, index) => (
                            <li key={todo.id} className="list-stacked-item">
                              <div className="treatment-group-item">
                                <div className="treatment-item">
                                  <input type="checkbox" />
                                    <label className={'todo-label ${todo.isComplete ? 'line-through' : ''}'}>
                                      {todo.title}
                                    </label>
                                </div>
                                <div className="btn-group">
                                  <button type="button" className="btn">
                                    Edit
                                  </button>
                                  <button type="button" className="btn btn__danger" onClick={() => deleteTodo(todo.id)}>
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
              </div>
          </div>
        </div>
    );
  }

if (document.getElementById('list')) {
    ReactDOM.render(<List />, document.getElementById('list'));
}