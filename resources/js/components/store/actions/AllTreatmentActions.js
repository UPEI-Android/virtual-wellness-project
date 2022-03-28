
import axios from "axios";
import {
    LIST_TREATMENTS,
    LIST_TREATMENTS_FAILURE,
    LIST_TREATMENTS_SUCCESS
} from "../actionTypes/TreatmentTypes";

export const getAllTreatments = () => {
    return (dispatch) => {
        dispatch(fetchTreatmentsRequest)
        axios.get('/api/treatments')
            .then(response =>{
                const treatments = response.data
                dispatch(fetchTreatmentsSuccess(treatments))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(fetchTreatmentsFailure(errorMsg))
            })
    }

}
export const fetchTreatmentsRequest = () => {
    return{
        type:LIST_TREATMENTS
    }
}
const fetchTreatmentsSuccess = treatments => {
    return{

        type:LIST_TREATMENTS_SUCCESS,
        payload: treatments
    }
}
const fetchTreatmentsFailure = error => {
    return {
        type:LIST_TREATMENTS_FAILURE,
        payload:error
    }
}
