import { combineReducers } from 'redux';
import treatmentReducer from './TreatmentReducer';
import ruleReducer from './RuleReducer';
import AllTreatmentReducer from './AllTreatmentReducer';
import UserReducer from './UserReducer';
const rootReducer = combineReducers({
    allTreatments: AllTreatmentReducer,
    rule: ruleReducer,
    treatment: treatmentReducer,
    user: UserReducer
});
export default rootReducer;
