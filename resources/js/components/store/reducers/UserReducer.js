
import {SHOW_USER} from "../actionTypes/UserTypes";
const initialState = {
    users: {},
    user: {
        id: "",
        name: "",
        email: "",
        password: "",
        is_admin: 0
    },
    error_message: "",

};
export default function (state=initialState,action){
    const {type,payload} = action;

    switch (type)
    {
        case SHOW_USER:
            return{
                ...state,
                users:payload,
                loading:false
            }
        default:
            return state;
    }
}

