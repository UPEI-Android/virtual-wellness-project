import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

export default function List() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([
    {
    id: 1,
    title: 'Your Task Example',
    isComplete: false,
    isEditing: false,
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

  function completeTodo(id){
    const updatedTodos = todos.map(todo => {
      if (todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  function markAsEditing(id){
    const updatedTodos = todos.map(todo => {
      if (todo.id === id){
        todo.isEditing = !todo.isComplete
      }
      return todo;
    })
    setTodos(updatedTodos);
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
                          className="list-unstyled"
                        >
                          { todos.map((todo, index) => (
                            <li key={todo.id} className="treatment-item-container">
                              <div className ="treatment-item">
                                  <input type="checkbox" onChange={() => completeTodo(todo.id)} checked={todo.isComplete ? true : false}/>
                                    
                                    { !todo.isEditing ? (
                                    <span className="treatment-item" >
                                      {todo.title}
                                    </span>

                                    ) :

                                    <input
                                    type="text"
                                    value={todoInput}
                                    className="treatment-input-group"
                                    placeholder={todo.title}
                                    autoFocus
                                  />
                                    }
                                </div>
                                <div className="btn-group" style={{"display" : "block"}}>
                                  <button type="button" className="btn" onClick={() => markAsEditing(todo.id)} style={{"display" : "inline"}}>
                                    Edit
                                  </button>
                                  <button type="button" className="btn btn__danger" onClick={() => deleteTodo(todo.id)} style={{"display" : "inline"}}>
                                    Delete
                                  </button>
                                </div>
                            </li>
                          )) }
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