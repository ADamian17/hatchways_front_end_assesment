import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { getStudents } from '../../redux/students/students.actions';

import StudentCard from '../../components/StudentCard/StudentCard';

import './StudentsContainer.scss';


class StudentsContainer extends Component {

    state = {
        searchValue: ''
    }
    
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

    handelChange = ( event ) => {
        this.setState({
            searchValue: event.target.value
        });        
    };

    render () {

        const studentsList  = this.props.studentsList.filter( 
            student => student.firstName.toLowerCase()
                .includes(this.state.searchValue.toLowerCase()) || 
                student.lastName.toLowerCase()
                    .includes(this.state.searchValue.toLowerCase()) )
            .map( ( student, idx ) => <StudentCard student={student} key={idx} /> 
            );

        return (
            <div className="container">
                <input id="name-input" name="search" type="search" placeholder="Seacrh by Name" onChange={this.handelChange} />
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
