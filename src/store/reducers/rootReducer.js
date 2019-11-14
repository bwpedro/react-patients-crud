import patientReducer from './patientReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    patient: patientReducer,
});

export default rootReducer;