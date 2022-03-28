import React, { useEffect } from 'react';
import { useState } from 'react';
import TreatmentFilters from './TreatmentFilters';
import {connect} from 'react-redux';
import {deleteTreatment, getTreatment, saveTreatmentData} from '../store/actions/TreatmentActions'

function TreatmentList(props) {
  useEffect(()=>{
    props.getTreatment(1)
  },[])

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
        props.getTreatment(id)
        const treatment = props.singleTreatmentData.treatment
        if (treatment.id === id){
          if(treatment.is_completed === 0)
          {treatment.is_completed =1}
          else{treatment.is_completed=0}
        }
          console.log(treatment)
           props.saveTreatmentData(treatment,id)
        }

      function deleteTodo(id){
        //setTodos([... todos].filter(todo => todo.id !== id));
        props.deleteTreatment(id);
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
                <a href={'/treatment/' + todo.id} className="treatment-item treatment-list-item" >{ todo.title }</a>

            </div>
            <div className="btn-group" style={{"display" : "block"}}>
                <button type="button" className="btn" style={{"display" : "inline"}}>
                Edit
                </button>
                <button type="button" className="btn btn__danger"  onClick={()=> deleteTodo(todo.id)} style={{"display" : "inline"}}>
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
const mapStateToProps = state => {
  return {
      singleTreatmentData: state.treatment
  }
}
const mapDispatchToProps = dispatch =>{
    return {
        getTreatment: (id) => dispatch(getTreatment(id)),
        saveTreatmentData: (state,id) => dispatch(saveTreatmentData(state,id)),
        deleteTreatment: (id) => dispatch(deleteTreatment(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TreatmentList)
