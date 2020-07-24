import { StudentsActionTypes } from './students.types';

const INITIAL_STATE = {
    studentsList: [],
    selectedStudent: {}
};

const jobReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case StudentsActionTypes.GET_STUDENTS:
            return {
                ...state,
                studentsList: action.payload
            };
        case StudentsActionTypes.GET_STUDENT_ID:
            return {
                ...state,
                selectedStudent: state.studentsList.find( student => student.id === action.payload )
            };
        case StudentsActionTypes.ADD_TAG:
            state.selectedStudent.tags.push(action.payload.tag);
            return {
                ...state,
                selectedStudent: {...state.selectedStudent}
            };
        default:
            return state;
    }
};

export default jobReducer;
