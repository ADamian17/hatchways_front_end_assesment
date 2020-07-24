import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { getStudents, getStudentId, addTag } from '../../redux/students/students.actions';
import { Student } from '../../Models/Student';

import StudentCard from '../../components/StudentCard/StudentCard';
import { getAverage } from '../../utils/helpers';

import './StudentsContainer.scss';

class StudentsContainer extends Component {

    state = {
        searchByName: '',
        searchByTag: '',
        tag: ''
    }
    
    componentDidMount () {
        this.getStudentsData();
    }

    getStudentsData = async () => {
        const { getStudents } = this.props;

        try {
            const students = await axios.get('https://www.hatchways.io/api/assessment/students');

            const studentsList = students.data.students.map( student => {

                return new Student(
                    student.city,
                    student.company,
                    student.email,
                    student.grades,
                    student.firstName, 
                    student.lastName,
                    student.id,
                    student.skill,
                    student.pic,
                    getAverage( student.grades )
                );  
            });

            if( studentsList ) getStudents( studentsList );

        } catch (error) {

            return console.log(error);

        }
    };

    handelChange = ( event ) => {
        this.setState({
            [event.target.name]: event.target.value
        });        
    };


    handleAddTag = ( id, state ) => {
        const { addTag, getStudentId } = this.props;
        getStudentId( id );
        if( id === '' && state === '' ) return;
        addTag( id, state );
    }

    render () {
        const studentsList  = this.props.studentsList.filter( 
            student => student.firstName.toLowerCase()
                .includes(this.state.searchByName.toLowerCase()) || 
                student.lastName.toLowerCase()
                    .includes(this.state.searchByName.toLowerCase()) )
            .map( ( student, idx ) => 
                <StudentCard 
                    student={student}
                    key={ idx }
                    handleAddTag={this.handleAddTag}
                    getStudentId={this.props.getStudentId} 
                    onChange={this.handelChange} /> 
            );

        return (
            <div className="container">
                <div className="search-container">
                    <input id="name-input" name="searchByName" type="search" placeholder="Seacrh by Name" onChange={this.handelChange} />
                </div>
                <div className="students-list-wrapper">
                    {studentsList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    studentsList: state.stundets.studentsList,
    selectedStudent: state.stundets.selectedStudent
});

const mapDispatchToProps = dispatch => ({
    getStudents: ( students ) => dispatch(getStudents( students )),
    getStudentId: ( id ) => dispatch(getStudentId( id )),
    addTag: ( id, tag  ) => dispatch( addTag( id, tag ) )
});

export default connect( mapStateToProps, mapDispatchToProps )(StudentsContainer);
