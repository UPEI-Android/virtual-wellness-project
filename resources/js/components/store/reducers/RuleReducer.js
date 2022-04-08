
import {
    SHOW_RULE,
    SHOW_RULE_FAILURE,
    SHOW_RULE_SUCCESS,
    EDIT_RULE,
    EDIT_RULE_SUCCESS,
    EDIT_RULE_FAILURE,
    DELETE_RULE,
    DELETE_RULE_SUCCESS,
    DELETE_RULE_FAILURE, CREATE_RULES,CREATE_RULES_SUCCESS,CREATE_RULES_FAILURE

} from "../actionTypes/RuleTypes";

const initialState = {
    loading: false,
    rule:'',
    error:'',

};
export default function RuleReducer (state=initialState,action)
{
    switch (action.type)
    {
        case SHOW_RULE:
            return{
                ...state,
                loading:true
            }
        case SHOW_RULE_SUCCESS:
            return{
                loading:false,
                rule: action.payload,
                error:''
            }
        case SHOW_RULE_FAILURE:
            return{
                loading:false,
                rule:'',
                error: action.payload
            }

        case EDIT_RULE:

            return{
                ...state,
                loading:true
            }
        case EDIT_RULE_SUCCESS:
            return{
                loading:false,
                rule: action.payload,
                error:''
            }
        case EDIT_RULE_FAILURE:
            return{
                loading:false,
                rule:'',
                error: action.payload
            }
        case DELETE_RULE:

            return{
                ...state,
                loading:true
            }

        case DELETE_RULE_SUCCESS:
            return {
                loading: false,
                rule: action.payload,
                error: ''
            }
        case DELETE_RULE_FAILURE:
            return{
                loading:false,
                rule:'',
                error:action.payload
            }
        case CREATE_RULES:

            return{
                ...state,
                loading:true
            }

        case CREATE_RULES_SUCCESS:
            return {
                loading: false,
                rule: action.payload,
                error: ''
            }
        case CREATE_RULES_FAILURE:
            return{
                loading:false,
                rule:'',
                error:action.payload
            }

        default:
            return state;
    }

}
