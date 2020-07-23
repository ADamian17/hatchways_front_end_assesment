import { StudentsActionTypes } from './students.types';

export const getStudents = ( students ) => ({
    type: StudentsActionTypes.GET_STUDENTS,
    payload: students
});

export const getStudentId = ( id ) => ({
    type: StudentsActionTypes.GET_STUDENT_ID,
    payload: id
});

export const addTag = ( id, tag ) => ({
    type: StudentsActionTypes.ADD_TAG,
    payload: {
        id,
        tag
    }
});
