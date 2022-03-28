import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import useFetch from '../../hooks/useFetch';
import {getTreatment, saveTreatmentData} from "../store/actions/TreatmentActions";
import {connect} from "react-redux";

function Treatment(props) {
    useEffect(()=>{
        props.getTreatment(1)
    },[])
    //const{data: treatments, isLoading} = useFetch('http://127.0.0.1:8000/api/treatments/1')
    function hope(id){
        props.getTreatment(id)
    }

    return (
        <div className="container background" style={{"padding-top":"5%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <button type="btn" onClick={() => hope(1)} >asdlkfjdsf</button>
                        {props.singleTreatmentData.treatment && (

                                <div className="card" style={{"padding": "60px"}}>
                                <div className="card-header" key={props.singleTreatmentData.treatment}>{ treatments.title }</div>
                                <label className="col-form-label-lg">Treatment ID: {treatments.id}</label>
                                <label className="form-label">Description:</label>
                                <div className="individual-treatment-form-control" style={{"margin-bottom":"20px"}}>
                                    <p className="form-label">{treatments.notes}</p>
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
