import React from 'react';
import { useState } from 'react';
import TreatmentFilters from './TreatmentFilters';
import useFetch from '../../hooks/useFetch';

export default function TreatmentList(props) {

    //const [filter, setFilter] = useState('all');

    return(
    <>
    {/*<TreatmentFilters 
        todosFiltered={props.todosFiltered}
        filter={filter}
        setFilter={setFilter}
    />
    */}
    
    <ul
        role="list"
        className="list-unstyled"
    >
        { props.todos.map((todo, index) => (
        <li key={todo.id} className="treatment-item-container">
            <div className ="treatment-item">
                <input type="checkbox" />

                {/* if the todo item is not in editing mode, display the title*/}

             
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
             Items Remaining
        </p>
        
    </div>
    </>
    )
}
