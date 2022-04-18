
import {
    LIST_USERS,
    LIST_USERS_FAILURE,
    LIST_USERS_SUCCESS,
} from "../actionTypes/UserTypes";

const initialState = {
    loading: false,
    users: [],
    error: "",

};
export default function AllUsersReducer (state=initialState,action)
{
    switch (action.type)
    {

        case LIST_USERS:
            return{
                ...state,
                loading:true
            }
        case LIST_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case LIST_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error: action.payload
            }



        default:
            return state;
    }

}
