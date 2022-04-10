import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { getTreatment, saveTreatmentData } from '../store/actions/TreatmentActions'
import ReactDOM from 'react-dom';
import { left } from '@popperjs/core';

function EditTreatment (props) {  

    const [show, setShow] = useState(false);

    function handleSubmit (e) {
        e.preventDefault();
          props.singleTreatmentData.title = e.target.title.value
          props.singleTreatmentData.notes = e.target.notes.value
          props.singleTreatmentData.start_date = e.target.start_date.value
          props.singleTreatmentData.end_date = e.target.end_date.value
          props.singleTreatmentData.start_time = e.target.start_time.value
          props.singleTreatmentData.end_time = e.target.end_time.value
          props.createTreatment(props.singleTreatmentData);
          e.target.reset();
    }
    
    return(

      <div className="container background" style={{paddingTop:"5%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card" style={{"padding": "60px"}}>
                        <div className="card-header">New Treatment</div>
                            <form className="form-control"action="#" onSubmit={(handleSubmit)}>
                              <div className="form-group-lg">
                                <label className="form-input-label">Title</label>
                                    <input
                                      type="string"
                                      name="title"
                                      className="form-input-block"
                                      placeholder="Enter Treatment Title Here..."
                                    />
                              </div>
                              <div className="form-group-lg">
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
                              
                              <div>
                                <label className="col-form-label-lg">Recurring?</label>
                                <input type="checkbox" onChange={() => setShow(prev => !prev)} style={{marginLeft:"10px"}}/>
                              </div>
                              { show ? 
                                <table>
                                  <tr className="fixed-height">
                                    <th>
                                      <label className="form-input-sm" >Start Date:</label>
                                    </th>
                                    <td>
                                      <input
                                        type="date"
                                        name="start_date"
                                        className="form-input-sm"
                                      />
                                    </td>
                                    <td>
                                    <input
                                      type="time"
                                      name="start_time"
                                      className="form-input-sm"
                                    />
                                  </td>
                                  </tr>
                                  <tr className="fixed-height">
                                    <th>
                                      <label className="form-input-sm" >End Date:</label>
                                    </th>
                                    <td>
                                    <input
                                      type="date"
                                      name="end_date"
                                      className="form-input-sm"
                                    />
                                    </td>
                                    <td>
                                     <input
                                      type="time"
                                      name="end_time" 
                                      className="form-input-sm"
                                    />
                                    </td>
                                  </tr>
                                  <tr className="fixed-height">
                                    <th>
                                      <label className="form-input-sm" >Frequency:</label>
                                    </th>
                                    <td>
                                      <select name="frequency" className="form-input-sm">
                                        <option value="DAILY">Daily</option>
                                        <option value="WEEKLY">Weekly</option>
                                        <option value="MONTHLY">Monthly</option>
                                        <option value="YEARLY">Yearly</option>
                                      </select>
                                      </td>
                                      <td></td>
                                  </tr>
                                  <tr className="fixed-height">
                                  <th>
                                    <label className="form-input-sm" >Interval:</label>     
                                    </th>
                                    <td>
                                    <input
                                      type="integer"
                                      name="interval"
                                      className="form-input-sm"
                                    />
                                    </td>
                                  </tr>
 
                                  </table>
                              : null }
                              <div style={{position:"relative",display:"block", float: left}}>
                              <button type="submit" className="btn-primary" >Create Treatment</button>
                              </div>
                            
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
        getTreatment: (id) => dispatch(getTreatment(id)),
        saveTreatmentData: (state) => dispatch(saveTreatmentData(state))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditTreatment)

if (document.getElementById('edit-treatment')) {
    const element = document.getElementById('edit-treatment')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<EditTreatment {...props} />, element);
}