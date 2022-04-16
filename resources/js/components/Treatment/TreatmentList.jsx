import React, { useEffect } from 'react';
import { useState } from 'react';
import TreatmentFilters from './TreatmentFilters';
import {connect} from 'react-redux';
import {deleteTreatment, getTreatment, saveTreatmentData} from '../store/actions/TreatmentActions'
import {getAllTreatments} from "../store/actions/AllTreatmentActions";

function TreatmentList(props) {
  useEffect(()=>{
    props.getAllTreatments,
    todosFiltered(filter)
  },[shownList,allList, completeList, activeList, filter, props.todos])

  
  const [filter, setFilter] = useState('all');
  const [shownList, setShownList] = useState(props.todos)
  const [allList, setAllList] =useState(props.todos)
  const [completeList, setCompleteList] = useState(props.todos.filter(todo => todo.is_completed))
  const [activeList, setActiveList] = useState(props.todos.filter(todo => !todo.is_completed))
  
  function remaining(){
      return shownList.filter(todo => !todo.is_completed).length;
    }

  function todosFiltered(filter){
      if (filter === 'all') {
        setShownList(allList)
        return shownList
      }
      else if (filter==='active'){
        //setList($treatments.filter(todo => !todo.is_completed))
        setShownList(activeList)
        return shownList
      }
      else if (filter==='completed'){
        //setList($treatments.filter(todo => todo.is_completed))
        setShownList(completeList)
        return shownList
      }
    }

    function completeTodo(id){

      // need to find specific treatment within the array of treatments
      let $treatment = null;
      props.singleTreatmentData.treatments.forEach((treatment)=>{
        if(treatment.id===id){
          $treatment = treatment
        }
      })

      if ($treatment.id === id){
        if($treatment.is_completed){
          $treatment.is_completed=!$treatment.is_completed
          setActiveList([...activeList, $treatment])
          setCompleteList(completeList.filter(treatment => treatment.id != id))
          
        }
        else{
          $treatment.is_completed=!$treatment.is_completed
          setCompleteList([...completeList, $treatment])
          setActiveList(activeList.filter(treatment => treatment.id != id))
        }
      }
        props.saveTreatmentData($treatment,id)
    }

    function deleteTodo(id){
      props.deleteTreatment(id);
      setAllList(allList.filter(treatment => treatment.id != id))
      setActiveList(activeList.filter(treatment => treatment.id != id))
      setCompleteList(completeList.filter(treatment => treatment.id != id))
      setShownList(allList.filter(treatment => treatment.id != id))
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
      {shownList.map((todo, index) => (
      <li key={todo.id} className="treatment-item-container">
          <div className ="treatment-item">
              <input type="checkbox" onChange={() => completeTodo(todo.id)} checked={todo.is_completed ? true : false}/>
              <a href={'/treatment/' + todo.id} className="treatment-item treatment-list-item" >{ todo.title }</a>

          </div>
          <div className="btn-group" style={{"display" : "block"}}>
            {/*
              <button type="button" className="btn" style={{"display" : "inline"}}>
              Edit
              </button>
            */}
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
      singleTreatmentData: state.allTreatments
  }
}
const mapDispatchToProps = dispatch =>{
    return {
        getAllTreatments: () => dispatch(getAllTreatments()),
        getTreatment: (id) => dispatch(getTreatment(id)),
        saveTreatmentData: (state,id) => dispatch(saveTreatmentData(state,id)),
        deleteTreatment: (id) => dispatch(deleteTreatment(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TreatmentList)
