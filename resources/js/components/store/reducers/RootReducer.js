import { combineReducers } from 'redux';
import treatmentReducer from './TreatmentReducer';
import ruleReducer from './RuleReducer';
import AllTreatmentReducer from './AllTreatmentReducer';
import UserReducer from './UserReducer';
import AllUsersReducer from './AllUsersReducer';
const rootReducer = combineReducers({
    allTreatments: AllTreatmentReducer,
    rule: ruleReducer,
    treatment: treatmentReducer,
    allUsers:AllUsersReducer,
    user: UserReducer
});
export default rootReducer;
