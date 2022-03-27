import React, { useEffect } from 'react';
import { useState } from 'react';
import TreatmentFilters from './TreatmentFilters';

export default function TreatmentList(props) {
    
    const [filter, setFilter] = useState('all');

    function remaining(){
        return props.todos.filter(todo => !todo.is_completed).length;
      }

    function todosFiltered(filter){
        if (filter === 'all') {
          return props.todos; 
        }
        else if (filter==='active'){
          return props.todos.filter(todo => !todo.is_completed);
        }
        else if (filter==='completed'){
          return props.todos.filter(todo => todo.is_completed);
        }
      }
      function completeTodo(id){
        const treatment = props.getTreatment(id)
        console.log("in completetodo "+ treatment)
        if (treatment.id === id){
        treatment.is_completed = !treatment.is_completed
        }
           saveTreatmentData(treatment)
    
        }


    return(
    <>
    <TreatmentFilters 
        todosFiltered={todosFiltered}
        filter={filter}
        setFilter={setFilter}
    />
    
    <ul
        role="list"
        className="list-unstyled"
    >
        { todosFiltered(filter).map((todo, index) => (
        <li key={todo.id} className="treatment-item-container">
            <div className ="treatment-item">
                <input type="checkbox" onChange={() => completeTodo(todo.id)} checked={todo.is_completed ? true : false}/>
             
                <a href="/treatment" className="treatment-item treatment-list-item" >{ todo.title }</a>
                 
            </div>
            <div className="btn-group" style={{"display" : "block"}}>
                <button type="button" className="btn" style={{"display" : "inline"}}>
                Edit
                </button>
                <button type="button" className="btn btn__danger"  style={{"display" : "inline"}}>
                Delete
                </button>
            </div>
        </li>
        ))}
    </ul>

    <div className="remaining-block">
        <p className='btn'>
        { remaining() } Item(s) Remaining
        </p>
        
    </div>
    </>
    )
}
  