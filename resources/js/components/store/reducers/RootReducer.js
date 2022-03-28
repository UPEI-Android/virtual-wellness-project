import { combineReducers } from 'redux';
import treatmentReducer from './TreatmentReducer';
import AllTreatmentReducer from './AllTreatmentReducer';
import UserReducer from './UserReducer';
const rootReducer = combineReducers({
    allTreatments: AllTreatmentReducer,
    treatment: treatmentReducer,
    user: UserReducer
});
export default rootReducer;
