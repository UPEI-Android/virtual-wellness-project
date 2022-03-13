import { combineReducers } from 'redux';
//import treatmentReducer from './TreatmentReducer';
import UserReducer from './UserReducer';
const rootReducer = combineReducers({

    //treatment: treatmentReducer,
    user: UserReducer
});
export default rootReducer;
