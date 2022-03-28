import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { getTreatment, createTreatment } from '../store/actions/TreatmentActions'
import ReactDOM from 'react-dom';

function CreateTreatment (props) {  
  {
    //const[todoInput, setTodoInput] = useState('');

    /*
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
        */
      }

    function handleSubmit (e) {
        e.preventDefault();
          
          props.singleTreatmentData.patient_id=1
          props.singleTreatmentData.title = e.target.title.value
          props.singleTreatmentData.notes = e.target.notes.value
          props.singleTreatmentData.start_date = e.target.start_date.value
          props.singleTreatmentData.end_date = e.target.end_date.value
          props.singleTreatmentData.start_time = e.target.start_time.value
          props.singleTreatmentData.end_time = e.target.end_time.value
          props.createTreatment(props.singleTreatmentData);
         
    }
    
    return(

      <div className="container background" style={{paddingTop:"5%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card" style={{"padding": "60px"}}>
                        <div className="card-header">New Treatment</div>
                            <form className="form-control"action="#" onSubmit={(handleSubmit)}>
                              <div className="form-group">
                              <label className="form-input-label">Title</label>
                                  <input
                                    type="text"
                                    name="title"
                                    className="form-input-block"
                                    placeholder="Enter Treatment Title Here..."
                                  />
                              </div>
                              <div className="form-group">
                                <label className="form-input-label">Description:</label>
                                <textarea
                                  type="text"
                                  name="notes"
                                  rows="4"
                                  cols="80"
                                  className="form-input-block"
                                  placeholder="Enter Treatment Description Here..."
                                />
                              </div>
                              <div className="form-group">
                                <label className="form-input-label">Start Date:</label>
                                <input
                                    type="date"
                                    name="start_date"
                                    className="form-input-block"
                                  />
                              </div>
                              <div className="form-group">
                                <label className="form-input-label">End Date:</label>
                                <input
                                    type="date"
                                    name="end_date"
                                    className="form-input-block"
                                  />
                              </div>

                              <div className="form-group">
                                <label className="form-input-label">Start Time:</label>
                                <input
                                    type="time"
                                    name="start_time"
                                    className="form-input-block"
                                  />
                              </div>
                              <div className="form-group">
                                <label className="form-input-label">End Time:</label>
                                <input
                                    type="time"
                                    name="end_time" 
                                    className="form-input-block"
                                  />
                              </div>
                              {/*
                              <div>
                                <label className="col-form-label-lg">Recurring?</label>
                                <input type="checkbox" style={{"margin-left":"10px"}}/>
                              </div>
                              */}
                            <button type="submit" className="btn-primary" >Create Treatment</button>
                            </form>
                            
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
  return {
      singleTreatmentData: state.treatment
  }
}
const mapDispatchToProps = dispatch =>{
    return {
        //getTreatment: (id) => dispatch(getTreatment(id)),
        createTreatment: (state) => dispatch(createTreatment(state))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateTreatment)

if (document.getElementById('create-treatment')) {
    const element = document.getElementById('create-treatment')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<CreateTreatment {...props} />, element);
}