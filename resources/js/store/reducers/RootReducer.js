import { combineReducers } from 'redux';
import userReducer  from './UserReducer';
const rootReducer = combineReducers({
    /*
    post: postReducer
                 this is just an example of adding another reducer, also add import
     */
    user: userReducer
});
export default rootReducer;
