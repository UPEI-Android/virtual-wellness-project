import React,{ useEffect } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import NoTreatments from './NoTreatments';
import TreatmentList from './TreatmentList';
import {getAllTreatments} from '../store/actions/AllTreatmentActions'

function TreatmentOverview({treatmentsData, getAllTreatments}){
  useEffect(()=>{
    getAllTreatments()
  },[])
  

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

    return (
      
      <div className="container background" style={{paddingTop:"2%"}}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="align-right"><a href="/createTreatment" className="btn-primary create-treatment-button">CreateTreatment</a></div>
            <div className="card" style={{"padding": "60px"}}>
              <div className="card-header">Your Treatments</div>
                  {treatmentsData.treatments.length > 0 ? (
                        <TreatmentList
                          todos={treatmentsData.treatments}
                        />
                  ) : (
                    <NoTreatments />
                  ) }
                   
                {/*
                    <TreatmentList 
                      completeTodo={completeTodo}
                      markAsEditing={markAsEditing}
                      updateTodo={updateTodo}
                      cancelEdit={cancelEdit}
                      deleteTodo={deleteTodo}
                      />
                  */}
              </div>
            </div>
          </div>
        </div>
    )
}
const mapStateToProps = state => {
  return {
      treatmentsData: state.allTreatments
  }
}
const mapDispatchToProps = dispatch =>{
    return {
        getAllTreatments: () => dispatch(getAllTreatments())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TreatmentOverview)


if (document.getElementById('treatment-overview')) {
    const element = document.getElementById('treatment-overview')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<TreatmentOverview {...props} />, element);
}
