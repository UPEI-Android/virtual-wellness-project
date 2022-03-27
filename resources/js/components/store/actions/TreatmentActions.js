
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
//getting treatments
export const getTreatment = () => {
    return (dispatch) => {
        dispatch(fetchTreatmentsRequest)
        axios.get('/api/treatments')
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

//saving data from treatment
export const saveTreatmentData = state => {

      return (dispatch) => {
          dispatch(saveTreatmentRequest)
          //state variable must be properly formatted json object containing treatment
          axios.put('/api/treatments', { state
          })
              .then(response =>{
                  dispatch(saveTreatmentSuccess(response))
              })
              .catch(error =>{
                  const errorMsg = error.message
                  dispatch(saveTreatmentFailure(errorMsg))
              })
      }
  }
const saveTreatmentRequest = () => {
        return{
            type:EDIT_TREATMENTS
        }

}
const saveTreatmentSuccess = response => {
    return{

        type:EDIT_TREATMENTS_SUCCESS,
        payload: response
    }
}
const saveTreatmentFailure = error => {
    return {
        type:EDIT_TREATMENTS_FAILURE,
        payload:error
    }
}

//delete treatment
export const deleteTreatment = () =>{
    return (dispatch) => {
        dispatch(deleteTreatmentRequest)
        //route is wrong
        axios.delete('/api/treatments/1/')
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
/*
Creating a Treatment
 */
export const createTreatment = (state) =>{
    return (dispatch) => {
        dispatch(createTreatmentRequest)

        axios.post('/api/treatments/',state)
            .then(response =>{

                dispatch(createTreatmentSuccess(response))

            })
            .catch(error =>{
                const errorMsg = error.message

                dispatch(createTreatmentFailure(errorMsg))
            })
    }

}

const createTreatmentRequest = () =>{
    return{
        type:CREATE_TREATMENTS
    }
}

const createTreatmentSuccess = response => {
    return{

        type:CREATE_TREATMENTS_SUCCESS,
        payload: response
    }
}
const createTreatmentFailure = error => {
    return{

        type:CREATE_TREATMENTS_FAILURE,
        payload: error
    }
}

