import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {getUser} from "../store/actions/UserActions";
import {connect} from "react-redux";
import SingleUser from "./SingleUser";

function SingleUser(props) {
    useEffect(()=>{
        props.getUser(props.id)
    },[])


    return (
        <div className="container background" style={{paddingTop:"5%"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {props.singleUserData && (
                        <div className="card" style={{"padding": "60px"}}>

                            <div className="card-header" key={props.singleUserData.user.id}>{ props.singleTreatmentData.treatment.title }</div>
                            <label className="col-form-label-lg">Treatment ID: {props.singleTreatmentData.treatment.id}</label>
                            <label className="form-label">Description:</label>
                            <div className="individual-treatment-form-control" style={{marginBottom:"20px"}}>
                                <p className="form-label">{props.singleTreatmentData.treatment.notes}</p>
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
        singleUserData: state.user
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getUser: (id) => dispatch(getUser(id)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SingleUser)
if (document.getElementById('singleuser')) {
    const element = document.getElementById('singleuser')
    const props = Object.assign({}, element.dataset )
    ReactDOM.render(<SingleUser {...props} />, element);
}
