import { combineReducers } from 'redux';
//import treatmentReducer from './TreatmentReducer';
import userReducer from './UserReducer';
const rootReducer = combineReducers({

    //treatment: treatmentReducer,
    user: userReducer
});
export default rootReducer;
