import { StudentsActionTypes } from './students.types';

const INITIAL_STATE = {
    studentsList: []
};

const jobReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case StudentsActionTypes.GET_STUDENTS:
            return {
                ...state,
                studentsList: action.payload
            };
        default:
            return state;
    }
};

export default jobReducer;
