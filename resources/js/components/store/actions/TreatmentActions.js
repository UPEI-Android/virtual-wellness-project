
import axios from "axios";
import {
    SHOW_TREATMENT,
    SHOW_TREATMENT_FAILURE,
    SHOW_TREATMENT_SUCCESS,
    EDIT_TREATMENTS,
    EDIT_TREATMENTS_SUCCESS,
    EDIT_TREATMENTS_FAILURE, DELETE_TREATMENTS, DELETE_TREATMENTS_SUCCESS, DELETE_TREATMENTS_FAILURE,
} from "../actionTypes/TreatmentTypes";
/**
 * set treatment defaults
 */
//GETTING ONE USER
export const getTreatment = () => {
    return (dispatch) => {
        dispatch(fetchTreatmentsRequest)
        //not the correct route
        axios.get('/api/userprofile/1/')
            .then(response =>{
                const treatments = response.data
                dispatch(fetchTreatmentSuccess(treatments))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(fetchTreatmentFailure(errorMsg))
            })
    }

}
export const fetchTreatmentsRequest = () => {
    return{
        type:SHOW_TREATMENT
    }
}
const fetchTreatmentSuccess = treatments => {
    return{

        type:SHOW_TREATMENT_SUCCESS,
        payload: treatments
    }
}
const fetchTreatmentFailure = error => {
    return {
        type:SHOW_TREATMENT_FAILURE,
        payload:error
    }
}
//delete treatment
export const deleteTreatment = () =>{
    return (dispatch) => {
        dispatch(deleteTreatmentRequest)
        //route is wrong
        axios.delete('/api/userprofile/1/')
            .then(response =>{

                dispatch(deleteTreatmentSuccess(response))

            })
            .catch(error =>{
                const errorMsg = error.message

                dispatch(deleteTreatmentFailure(errorMsg))
            })
    }

}

const deleteTreatmentRequest = () => {
    return{
        type:DELETE_TREATMENTS
    }
}
const deleteTreatmentSuccess = response => {
    return{

        type:DELETE_TREATMENTS_SUCCESS,
        payload: response
    }
}
const deleteTreatmentFailure = error => {
    return {
        type:DELETE_TREATMENTS_FAILURE,
        payload:error
    }
}
