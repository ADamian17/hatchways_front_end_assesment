import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { getStudents, getStudentId, addTag } from '../../redux/students/students.actions';

import StudentCard from '../../components/StudentCard/StudentCard';

import './StudentsContainer.scss';


class StudentsContainer extends Component {

    state = {
        searchValue: '',
        tag: ''
    }
    
    componentDidMount () {
        this.getStudentsData();
    }

    getStudentsData = async () => {
        const { getStudents } = this.props;

        try {
            const students = await axios.get('https://www.hatchways.io/api/assessment/students');

            if( students ) getStudents( students.data.students.slice()); 

        } catch (error) {

            return console.log(error);

        }
    };

    handelChange = ( event ) => {
        this.setState({
            [event.target.name]: event.target.value
        });        
    };


    handleAddTag = ( event, id, state ) => {
        const { addTag } = this.props;
        event.preventDefault();
        if( id === '' && state === '' ) return;
        addTag( id, state );
    }

    render () {
        console.log( this.props.selectedStudent );
        const studentsList  = this.props.studentsList.filter( 
            student => student.firstName.toLowerCase()
                .includes(this.state.searchValue.toLowerCase()) || 
                student.lastName.toLowerCase()
                    .includes(this.state.searchValue.toLowerCase()) )
            .map( ( student ) => 
                <StudentCard 
                    student={student} 
                    key={student.id}
                    tags={this.props.selectedStudent.tag ? this.props.selectedStudent.tag : [] }
                    handleSubmit={this.handleAddTag}  
                    getStudentId={this.props.getStudentId} 
                    onChange={this.handelChange} /> 
            );

        return (
            <div className="container">
                <input id="name-input" name="searchValue" type="search" placeholder="Seacrh by Name" onChange={this.handelChange} />
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
