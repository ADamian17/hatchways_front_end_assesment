import { combineReducers } from 'redux';

import studentsReducer from './students/students.reducer';

export default combineReducers({
    stundets: studentsReducer
});
