
import {SHOW_USER, SHOW_USER_FAILURE, SHOW_USER_SUCCESS} from "../actionTypes/UserTypes";
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

        default:
            return state;
    }

}


