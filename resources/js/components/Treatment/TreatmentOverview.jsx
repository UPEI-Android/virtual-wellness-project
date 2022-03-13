import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import NoTreaments from './NoTreatments';
import TreatmentForm from './TreatmentForm';
import TreatmentList from './TreatmentList';

export default function TreatmentOverview(props) {
  const [todos, setTodos] = useState([
    {
    id: 1,
    title: 'Your Example Treatment',
    isComplete: false,
    isEditing: false,
    },
    
  ]);
  const[idForTodo, setidForTodo] = useState(2);

  function addTodo(todo){

    setTodos([... todos,
      {
        id: idForTodo,
        title: todo,
        isComplete: false,
      }
    ]);

  setidForTodo(prevIdForTodo => prevIdForTodo + 1);
  }

  function deleteTodo(id){
    setTodos([... todos].filter(todo => todo.id !== id));
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
        todo.isEditing = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function updateTodo(event, id){
    const updatedTodos = todos.map(todo => {
      if (todo.id === id){
        if(event.target.value.trim().length === 0){
          todo.isEditing =false;
          return todo;
        }
        todo.title = event.target.value
        todo.isEditing = false;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  function cancelEdit(event, id){
    const updatedTodos = todos.map(todo => {
      if (todo.id === id){
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function remaining(){
    return todos.filter(todo => !todo.isComplete).length;
  }
  function todosFiltered(filter){
    if (filter === 'all') {
      return todos;
    }
    else if (filter==='active'){
      return todos.filter(todo => !todo.isComplete);
    }
    else if (filter==='completed'){
      return todos.filter(todo => todo.isComplete);
    }
  }

    return (
      <div className="container background" style={{"padding-top":"5%"}}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card" style={{"padding": "60px"}}>
              <div className="card-header">Your Treatments</div>
                <TreatmentForm addTodo={addTodo} completeTodo={completeTodo}/>

                { todos.length > 0 ? (
                  <TreatmentList 
                    todos={todos}
                    completeTodo={completeTodo}
                    markAsEditing={markAsEditing}
                    updateTodo={updateTodo}
                    cancelEdit={cancelEdit}
                    deleteTodo={deleteTodo}
                    remaining={remaining}
                    todosFiltered={todosFiltered}
                    />
                ) : (
                  <NoTreaments />
                ) }
                
              </div>
            </div>
          </div>
          <p > { props.test } </p>
        </div>
        
    );
  }

if (document.getElementById('treatment-overview')) {
    const element = document.getElementById('treatment-overview')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<TreatmentOverview {...props} />, element);
}