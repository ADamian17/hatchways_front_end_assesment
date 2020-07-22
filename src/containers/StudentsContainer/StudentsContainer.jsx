import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { getStudents } from '../../redux/students/students.actions';

import StudentCard from '../../components/StudentCard/StudentCard';

import './StudentsContainer.scss';


class StudentsContainer extends Component {
    
    componentDidMount () {
        this.getStudentsData();
    }

    getStudentsData = async () => {
        const { getStudents } = this.props;

        try {
            const students = await axios.get('https://www.hatchways.io/api/assessment/students');

            if( students ) getStudents( students.data.students ); 

        } catch (error) {

            return console.log(error);

        }
    };

    render () {
        const studentsList  = this.props.studentsList.map( 
            ( student, idx ) => <StudentCard student={student} key={idx} /> 
        );
        return (
            <div className="container">
                <input type="search" />
                <div className="students-list-wrapper">
                    {studentsList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    studentsList: state.stundets.studentsList
});

const mapDispatchToProps = dispatch => ({
    getStudents: ( students ) => dispatch(getStudents( students ))
});

export default connect( mapStateToProps, mapDispatchToProps )(StudentsContainer);
