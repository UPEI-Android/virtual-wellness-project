
import axios from "axios";
import {SHOW_USER,
    SHOW_USER_FAILURE,
    SHOW_USER_SUCCESS,
    EDIT_USERS,
    EDIT_USERS_SUCCESS,
    EDIT_USERS_FAILURE,
} from "../actionTypes/UserTypes";
/**
 * set user defaults
 */
//GETTING ONE USER
export const getUser = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('/api/userprofile/1/')
            .then(response =>{
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(fetchUserFailure(errorMsg))
            })
    }

}
export const fetchUsersRequest = () => {
    return{
        type:SHOW_USER
    }
}
const fetchUserSuccess = users => {
    return{

        type:SHOW_USER_SUCCESS,
        payload: users
    }
}
const fetchUserFailure = error => {
    return {
        type:SHOW_USER_FAILURE,
        payload:error
    }
}

//saving data from user profile

export const saveUserData = state => {
    return (dispatch) => {
        dispatch(saveUserRequest())
        axios.post('/api/userprofile/1/', state)
            .then(response =>{
                dispatch(saveUserSuccess(response))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(saveUserFailure(errorMsg))
            })
    }
}
const saveUserRequest = () => {
        return{
            type:EDIT_USERS
        }

}
const saveUserSuccess = response => {
    return{

        type:EDIT_USERS_SUCCESS,
        payload: response
    }
}
const saveUserFailure = error => {
    return {
        type:EDIT_USERS_FAILURE,
        payload:error
    }
}
