
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
export default function TreatmentReducer (state=initialState,action)
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
                treatments:action.payload,
                error:''
            }
        case LIST_USERS_FAILURE:
            return{
                loading:false,
                treatments:[],
                error: action.payload
            }



        default:
            return state;
    }

}
