
import {
    LIST_TREATMENTS,
    LIST_TREATMENTS_FAILURE,
    LIST_TREATMENTS_SUCCESS,
} from "../actionTypes/TreatmentTypes";

const initialState = {
    loading: false,
    treatments: [],
    error: "",

};
export default function TreatmentReducer (state=initialState,action)
{
    switch (action.type)
    {
       
            case LIST_TREATMENTS:
            return{
                ...state,
                loading:true
            }
        case LIST_TREATMENTS_SUCCESS:
            return{
                loading:false,
                treatments:action.payload,
                error:''
            }
        case LIST_TREATMENTS_FAILURE:
            return{
                loading:false,
                treatments:[],
                error: action.payload
            }

    

        default:
            return state;
    }

}
