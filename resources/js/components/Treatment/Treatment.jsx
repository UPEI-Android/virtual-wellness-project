import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {getTreatment} from "../store/actions/TreatmentActions";
import {connect} from "react-redux";

function Treatment(props) {
    useEffect(()=>{
        props.getTreatment(1)
    },[])

    

    return (
        <div className="container background" style={{paddingTop:"5%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                        {props.singleTreatmentData.treatment && (
                                <div className="card" style={{"padding": "60px"}}>
                                    {console.log(props.singleTreatmentData.treatment)}
                                <div className="card-header" key={props.singleTreatmentData.treatment.id}>{ props.singleTreatmentData.title }</div>
                                <label className="col-form-label-lg">Treatment ID: {treatments.id}</label>
                                <label className="form-label">Description:</label>
                                <div className="individual-treatment-form-control" style={{"margin-bottom":"20px"}}>
                                    <p className="form-label">{props.singleTreatmentData.notes}</p>
                                </div>
                            </div>
                        )}
                        { /*


                            <div>
                            <label className="col-form-label-lg">Recurring?</label>
                            <input type="checkbox" style={{"margin-left":"10px"}}/>
                            </div>
                            */ }
                        { /*errorMessage && <div> {errorMessage} </div> */}

                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        singleTreatmentData: state.treatment
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getTreatment: (id) => dispatch(getTreatment(id)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Treatment)
if (document.getElementById('treatment')) {
    const element = document.getElementById('treatment')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<Treatment {...props} />, element);
}
