
import {
    SHOW_USER,
    SHOW_USER_FAILURE,
    SHOW_USER_SUCCESS,
    EDIT_USERS,
    EDIT_USERS_SUCCESS,
    EDIT_USERS_FAILURE, DELETE_USERS_FAILURE, DELETE_USERS_SUCCESS, DELETE_USERS,
} from "../actionTypes/UserTypes";

const initialState = {
    loading: false,
    users: '',
    error: "",

};
export default function UserReducer (state=initialState,action)
{
    switch (action.type)
    {
        case SHOW_USER:
            return{
                ...state,
                loading:true
            }
        case SHOW_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case SHOW_USER_FAILURE:
            return{
                loading:false,
                users:[],
                error: action.payload
        }

        case EDIT_USERS:

            return{
                ...state,
                loading:true
            }
        case EDIT_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case EDIT_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error: action.payload
            }
        case DELETE_USERS:

            return{
                ...state,
                loading:true
            }

        case DELETE_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case DELETE_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }

        default:
            return state;
    }

}


