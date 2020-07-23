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
            // if( !state.studentsList[action.payload.id].tag ) {
            //     state.studentsList[action.payload.id].tag = [];
            // }
            return {
                ...state,
                selectedStudent: state.studentsList[action.payload]
            };
        case StudentsActionTypes.ADD_TAG:
            if( !state.studentsList[action.payload.id].tag ) {
                state.studentsList[action.payload.id].tag = [];
            }
            state.studentsList[action.payload.id].tag.push(action.payload.tag);
            return {
                ...state
            };
        default:
            return state;
    }
};

export default jobReducer;
