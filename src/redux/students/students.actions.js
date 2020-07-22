import { StudentsActionTypes } from './students.types';

export const getStudents = ( students ) => ({
    type: StudentsActionTypes.GET_STUDENTS,
    payload: students
});
