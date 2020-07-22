import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { getStudents } from '../../redux/students/students.actions';

const url = 'https://www.hatchways.io/api/assessment/students';

class StudentsContainer extends Component {
    
    componentDidMount () {
        this.getStudentsData();
    }

    getStudentsData = async () => {
        const { getStudents } = this.props;

        try {
            const students = await axios.get(url);

            if( students ) getStudents( students.data.students ); 

        } catch (error) {

            return console.log(error);

        }
    };

    render () {
        console.log(this.props);
        return <h1>hello</h1>;
    }
}

const mapStateToProps = state => ({
    studentsList: state.stundets.studentsList
});

const mapDispatchToProps = dispatch => ({
    getStudents: ( students ) => dispatch(getStudents( students ))
});

export default connect( mapStateToProps, mapDispatchToProps )(StudentsContainer);
