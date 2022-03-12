import * as UserTypes from '../actionTypes/UserTypes';
import User from '../../../apis/User';
import axios from "axios";
import {SHOW_USER, SHOW_USER_FAILURE} from "../actionTypes/UserTypes";
/**
 * set user defaults
 */

export const getOne = () => async dispatch =>
{
    try {
        const res = await axios.get('/api/userprofile/1/');
        dispatch({
            type:SHOW_USER,
            payload:res.data
        })
    }catch(error){
        dispatch({
            type:SHOW_USER_FAILURE,
            payload:{
                msg:error.response.statusText,
                status:error.response.status
            }
        })

    }
}
