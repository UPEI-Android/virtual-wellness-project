import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getTreatment, createTreatment } from '../store/actions/TreatmentActions'

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
           console.log("hy!")
          e.preventDefault();
          props.getTreatment(id)
          const treatment = props.singleTreatmentData.treatment
          treatment.id = 1
          treatment.patient_id=1
          treatment.title = e.target.title.value
          treatment.notes = e.target.notes.value
          treatment.start_date = e.target.start_date.value
          treatment.end_date = e.target.end_date.value
          treatment.start_time = e.target.start_time.value
          treatment.end_time = e.target.end_time.value
          console.log(treatment)
          props.createTreatment(treament);
         
    }
    
    return(

      <div className="container background" style={{paddingTop:"5%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card" style={{"padding": "60px"}}>
                        <div className="card-header">New Treatment</div>
                         
                            <form className="form-control"action="#" onSubmit={(handleSubmit)}>
                            {/* THis is what it was but we are not handling submit until front and back end connected
                            <form className="form-control" action="#" onSubmit={(handleSubmit)}>*/}
                              <div className="form-group">
                              <label className="form-input-label">Title</label>
                                  <input
                                    type="text"
                                    id='title'
                                    defaultValue="test"
                                    className="form-input-block"
                                    placeholder="Enter Treatment Title Here..."
                                  />
                              </div>
                              <div className="form-group">
                                <label className="form-input-label">Description:</label>
                                <textarea
                                  type="text"
                                  id="notes"
                                  defaultValue="test"
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
                                    id="start_date"
                                    className="form-input-block"
                                  />
                              </div>
                              <div className="form-group">
                                <label className="form-input-label">End Date:</label>
                                <input
                                    type="date"
                                    id="end_date"
                                    className="form-input-block"
                                  />
                              </div>

                              <div className="form-group">
                                <label className="form-input-label">Start Time:</label>
                                <input
                                    type="time"
                                    id="start_time"
                                    className="form-input-block"
                                  />
                              </div>
                              <div className="form-group">
                                <label className="form-input-label">End Time:</label>
                                <input
                                    type="time"
                                    id="end_time" 
                                    className="form-input-block"
                                  />
                              </div>
                              {/*
                              <div>
                                <label className="col-form-label-lg">Recurring?</label>
                                <input type="checkbox" style={{"margin-left":"10px"}}/>
                              </div>
                              */}

                            </form>
                            <button type="submit" className="btn-primary" >
                                Create Treatment
                            </button>
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