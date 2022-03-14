
import User from '../../../apis/User';
import axios from "axios";
import {SHOW_USER, SHOW_USER_FAILURE, SHOW_USER_SUCCESS} from "../actionTypes/UserTypes";
/**
 * set user defaults
 */

export const getOne = () => {
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
    // try {
    //     const res = await axios.get('/api/userprofile/1/');
    //     dispatch({
    //         type:SHOW_USER,
    //         payload:res.data
    //
    //     })
    // }catch(error){
    //     dispatch({
    //         type:SHOW_USER_FAILURE,
    //         payload:{
    //             msg:error.response.statusText,
    //             status:error.response.status
    //         }
    //     })
    //
    // }

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
