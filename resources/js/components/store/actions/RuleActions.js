
import axios from "axios";
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
/**
 * set rule defaults
 */
//getting rule
export const getRule = (id) => {
    return (dispatch) => {
        dispatch(fetchRuleRequest)
        axios.get('/api/rule/' + id)
            .then(response =>{
                const rule = response.data
                dispatch(fetchRuleSuccess(rule))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(fetchRuleFailure(errorMsg))
            })
    }

}
export const fetchRuleRequest = () => {
    return{
        type:SHOW_RULE
    }
}
const fetchRuleSuccess = rule => {
    return{

        type:SHOW_RULE_SUCCESS,
        payload: rule
    }
}
const fetchRuleFailure = error => {
    return {
        type:SHOW_RULE_FAILURE,
        payload:error
    }
}

//saving data from rule
export const saveRuleData = (state, id) => {

    return (dispatch) => {
        dispatch(saveRuleRequest)
        //state variable must be properly formatted json object containing rule
        axios.put('/api/rule/' + id, { state
        })
            .then(response =>{
                dispatch(saveRuleSuccess(response))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(saveRuleFailure(errorMsg))
            })
    }
}
const saveRuleRequest = () => {
    return{
        type:EDIT_RULE
    }

}
const saveRuleSuccess = response => {
    return{

        type:EDIT_RULE_SUCCESS,
        payload: response
    }
}
const saveRuleFailure = error => {
    return {
        type:EDIT_RULE_FAILURE,
        payload:error
    }
}

//delete rule
export const deleteRule = (id) =>{
    return (dispatch) => {
        dispatch(deleteRuleRequest)
        //route is wrong
        axios.delete('/api/rule/'+id)
            .then(response =>{

                dispatch(deleteRuleSuccess(response))

            })
            .catch(error =>{
                const errorMsg = error.message

                dispatch(deleteRuleFailure(errorMsg))
            })
    }

}
const deleteRuleRequest = () => {
    return{
        type:DELETE_RULE
    }
}
const deleteRuleSuccess = response => {
    return{

        type:DELETE_RULE_SUCCESS,
        payload: response
    }
}
const deleteRuleFailure = error => {
    return {
        type:DELETE_RULE_FAILURE,
        payload:error
    }
}
/*
Creating a Rule
 */
export const createRule = (state) =>{
    return (dispatch) => {
        dispatch(createRuleRequest)

        axios.post('/api/rule/',state)
            .then(response =>{

                dispatch(createRuleSuccess(response))

            })
            .catch(error =>{
                const errorMsg = error.message

                dispatch(createRuleFailure(errorMsg))
            })
    }

}

const createRuleRequest = () =>{
    return{
        type:CREATE_RULES
    }
}

const createRuleSuccess = response => {
    return{

        type:CREATE_RULES_SUCCESS,
        payload: response
    }
}
const createRuleFailure = error => {
    return{

        type:CREATE_RULES_FAILURE,
        payload: error
    }
}
