
import axios from "axios";

import {LIST_USERS,LIST_USERS_FAILURE,LIST_USERS_SUCCESS} from "../actionTypes/UserTypes";

export const getAllUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('/api/users')
            .then(response =>{
                const users = response.data.users
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }

}
export const fetchUsersRequest = () => {
    return{
        type:LIST_USERS
    }
}
const fetchUsersSuccess = treatments => {
    return{

        type:LIST_USERS_SUCCESS,
        payload: treatments
    }
}
const fetchUsersFailure = error => {
    return {
        type:LIST_USERS_FAILURE,
        payload:error
    }
}
