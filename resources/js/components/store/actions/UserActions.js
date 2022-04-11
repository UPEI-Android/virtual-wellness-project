
import axios from "axios";
import {
    SHOW_USER,
    SHOW_USER_FAILURE,
    SHOW_USER_SUCCESS,
    EDIT_USERS,
    EDIT_USERS_SUCCESS,
    EDIT_USERS_FAILURE, DELETE_USERS, DELETE_USERS_SUCCESS, DELETE_USERS_FAILURE,
} from "../actionTypes/UserTypes";
/**
 * set user defaults
 */
//GETTING ONE USER
export const getUser = (userid) => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('/api/userprofile/'+(userid))
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

export const saveUserData = (state, id) => {

  /*  state = {
        "name":"jared",
        "current_weight":"65",
        "phone":"9028675309"
    }*/
    return (dispatch) => {
        dispatch(saveUserRequest)
        //state variable must be properly formatted json object containing user
        axios.put('/api/userprofile/'+id, { state
        })
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
//delete user
export const deleteUser = (userid) =>{
    return (dispatch) => {
        dispatch(deleteUserRequest)
        axios.delete('/api/userprofile/'+userid)
            .then(response =>{

                dispatch(deleteUserSuccess(response))

            })
            .catch(error =>{
                const errorMsg = error.message

                dispatch(deleteUserFailure(errorMsg))
            })
    }

}

const deleteUserRequest = () => {
    return{
        type:DELETE_USERS
    }
}
const deleteUserSuccess = response => {
    return{

        type:DELETE_USERS_SUCCESS,
        payload: response
    }
}
const deleteUserFailure = error => {
    return {
        type:DELETE_USERS_FAILURE,
        payload:error
    }
}
