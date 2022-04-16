
import axios from "axios";
import {
    SHOW_TREATMENT,
    SHOW_TREATMENT_FAILURE,
    SHOW_TREATMENT_SUCCESS,
    EDIT_TREATMENT,
    EDIT_TREATMENT_SUCCESS,
    EDIT_TREATMENT_FAILURE,
    DELETE_TREATMENTS,
    DELETE_TREATMENTS_SUCCESS,
    DELETE_TREATMENTS_FAILURE,
    CREATE_TREATMENTS,
    CREATE_TREATMENTS_SUCCESS,
    CREATE_TREATMENTS_FAILURE,
} from "../actionTypes/TreatmentTypes";
/**
 * set treatment defaults
 */
//getting treatments
export const getTreatment = (id) => {
    return (dispatch) => {
        dispatch(fetchTreatmentRequest)
        axios.get('/api/treatments/' + id)
            .then(response =>{
                const treatment = response.data
                dispatch(fetchTreatmentSuccess(treatment))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(fetchTreatmentFailure(errorMsg))
            })
    }

}
export const fetchTreatmentRequest = () => {
    return{
        type:SHOW_TREATMENT
    }
}
const fetchTreatmentSuccess = treatment => {
    return{

        type:SHOW_TREATMENT_SUCCESS,
        payload: treatment
    }
}
const fetchTreatmentFailure = error => {
    return {
        type:SHOW_TREATMENT_FAILURE,
        payload:error
    }
}

//saving data from treatment
export const saveTreatmentData = (state, id) => {
      return (dispatch) => {
          dispatch(saveTreatmentRequest)
          //state variable must be properly formatted json object containing treatment
          axios.put('/api/treatments/' + id, {
              "id": state.id,
              "title":state.title,
              "notes":state.notes,
              "start_date":state.start_date,
              "end_date":state.end_date,
              "start_time":state.start_time,
              "end_time":state.end_time,
              "is_completed":state.is_completed,
              "parent_id":state.parent_id,
              "created_at":state.created_at,
              "updated_at":state.updated_at
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
            type:EDIT_TREATMENT
        }

}
const saveTreatmentSuccess = response => {
    return{

        type:EDIT_TREATMENT_SUCCESS,
        payload: response
    }
}
const saveTreatmentFailure = error => {
    return {
        type:EDIT_TREATMENT_FAILURE,
        payload:error
    }
}

//delete treatment
export const deleteTreatment = (id) =>{
    return (dispatch) => {
        dispatch(deleteTreatmentRequest)
        //route is wrong
        axios.delete('/api/treatments/'+id)
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
export const assignTreatment = (state) =>{
    return (dispatch) => {
        dispatch(assignTreatmentRequest)
        axios.post('/api/assignTreatment/',state)
            .then(response =>{

                dispatch(assignTreatmentSuccess(response))

            })
            .catch(error =>{
                const errorMsg = error.message

                dispatch(assignTreatmentFailure(errorMsg))
            })
    }

}

const assignTreatmentRequest = () =>{
    return{
        type:CREATE_TREATMENTS
    }
}

const assignTreatmentSuccess = response => {
    return{

        type:CREATE_TREATMENTS_SUCCESS,
        payload: response
    }
}
const assignTreatmentFailure = error => {
    return{

        type:CREATE_TREATMENTS_FAILURE,
        payload: error
    }
}

