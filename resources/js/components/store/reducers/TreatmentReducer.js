
import {
    SHOW_TREATMENT,
    SHOW_TREATMENT_FAILURE,
    SHOW_TREATMENT_SUCCESS,
    EDIT_TREATMENT,
    EDIT_TREATMENT_SUCCESS,
    EDIT_TREATMENT_FAILURE,
    DELETE_TREATMENTS_FAILURE,
    DELETE_TREATMENTS_SUCCESS,
    DELETE_TREATMENTS,
    CREATE_TREATMENTS,
    CREATE_TREATMENTS_SUCCESS,
    CREATE_TREATMENTS_FAILURE,
} from "../actionTypes/TreatmentTypes";

const initialState = {
    loading: false,
    treatment:'',
    error:'',

};
export default function TreatmentReducer (state=initialState,action)
{
    switch (action.type)
    {
        case SHOW_TREATMENT:
            return{
                ...state,
                loading:true
            }
        case SHOW_TREATMENT_SUCCESS:
            return{
                loading:false,
                treatment: action.payload,
                error:''
            }
        case SHOW_TREATMENT_FAILURE:
            return{
                loading:false,
                treatment:'',
                error: action.payload
            }

        case EDIT_TREATMENT:

            return{
                ...state,
                loading:true
            }
        case EDIT_TREATMENT_SUCCESS:
            return{
                loading:false,
                treatment: action.payload,
                error:''
            }
        case EDIT_TREATMENT_FAILURE:
            return{
                loading:false,
                treatment:'',
                error: action.payload
            }
        case DELETE_TREATMENTS:

            return{
                ...state,
                loading:true
            }

        case DELETE_TREATMENTS_SUCCESS:
            return {
                loading: false,
                treatment: action.payload,
                error: ''
            }
        case DELETE_TREATMENTS_FAILURE:
            return{
                loading:false,
                treatment:'',
                error:action.payload
            }
        case CREATE_TREATMENTS:

            return{
                ...state,
                loading:true
            }

        case CREATE_TREATMENTS_SUCCESS:
            return {
                loading: false,
                treatment: action.payload,
                error: ''
            }
        case CREATE_TREATMENTS_FAILURE:
            return{
                loading:false,
                treatment:'',
                error:action.payload
            }

        default:
            return state;
    }

}
