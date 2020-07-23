import React, { Component } from 'react';

import './StudentCard.scss';
import plus from './assests/plus_icon.png';
import minus from './assests/minus_icon.png';

class StudentCard extends Component {

    state = {
        tag: '',
        show: false
    }

    handleChange = ( event ) => {
        this.setState({
            [event.target.name]: event.target.value
        }); 
    }; 

    handleShow = (event, id ) => {
        event.preventDefault();
        this.setState({
            show: !this.state.show
        });
        this.props.getStudentId( id );
    }

    render () {
        const {company, email, firstName, lastName, grades, pic, skill, id } = this.props.student;

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const average = grades.reduce( reducer, grades.length );
        const gradeTestList = grades.map( (grade, idx ) => {
            return <p key={idx}>Test{idx + 1 }: {grade}%</p>;
        });
    
    
        return (

            <div className="card-container" style={ this.state.show !== true ? {height: '225px'} : {height: '400px' } } >
                <div className="img-wrapper">
                    <img src={pic} alt="avatar" />
                </div>
                <div className="card-body">
    
                    <div className="content-wrapper">
                        <h1> <span>{firstName.toUpperCase()}</span> <span>{lastName.toUpperCase()}</span></h1>
                        <p>Email: {email}</p>
                        <p>Company: {company}</p>
                        <p>Skill: {skill}</p>
                        <p>Average: {average}%</p>
                    </div>
    
                    <div className="button-wrapper expand-btn" >
                        <img src={ this.state.show !== true ? plus : minus } alt="button" onClick={( event ) => this.handleShow(event, id) } /> 
                    </div>
                </div>

                { 
                    this.state.show !== true ? '' :
    
                    <div className="test-wrapper">
                        {gradeTestList}

                        <div className="tags-container">
                            {
                                this.props.tags.length !== 0 ? <p>{this.props.tags[0]}</p> : ''
                            }
                        </div>
                        <form 
                            id="tag-input" 
                            onSubmit={( event ) => this.props.handleSubmit( event, this.props.student.id, this.state.tag )}>
                            <button>new tag</button>
                            <input 
                                name="tag" 
                                className="add-tag-input" 
                                type="text" 
                                placeholder="Add by Tag" 
                                onChange={ this.handleChange } />
                        </form> 
                    </div> 
                }  
            </div>
        );
    }
}

export default StudentCard;
