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

    handleShow = (event ) => {
        event.preventDefault();
        this.setState({
            show: !this.state.show
        });
    }

    handleSubmit = (event, id, tag) => {
        event.preventDefault();
        this.props.handleAddTag(id, tag);
        this.setState({
            tag: ''
        });
    } 

    render () {
        const { company, email, firstName, lastName, grades, pic, skill, id, tags, average } = this.props.student;

        const gradeTestList = grades.map( (grade, idx ) => {
            return <p key={idx}>Test {idx + 1 }: {grade}%</p>;
        });
        const tagsList = tags.map(( tag, idx ) => <div key={idx} className="tags" >{tag}</div> );

        return (
            <div className="card-container" style={ this.state.show !== true ? {height: '200px'} : {height: '410px' } } >
                <div className="img-wrapper">
                    <img src={pic} alt="avatar" />
                </div>
                <div className="card-body">
    
                    <div className="content-wrapper">
                        <div className="content-header">
                            <h1> <span>{firstName.toUpperCase()}</span> <span>{lastName.toUpperCase()}</span></h1>
                            <div className="button-wrapper expand-btn" >
                                <img src={ this.state.show !== true ? plus : minus } alt="button" onClick={( event ) => this.handleShow(event, id) } /> 
                            </div>
                        </div>
                        <div className="content-body">
                            <p>Email: {email}</p>
                            <p>Company: {company}</p>
                            <p>Skill: {skill}</p>
                            <p>Average: {average}%</p>
                        </div>
                    </div>
                </div>

                { 
                    this.state.show !== true ? '' :
    
                    <div className="test-wrapper">
                        {gradeTestList}

                        <div className="form-container">
                            {
                                tags.length !== 0 ? 
                                    (
                                        <div className="tags-container">
                                            {tagsList}
                                        </div>
                                    ) :  '' 
                            }
                        
                            <form 
                                id="tag-input" 
                                onSubmit={( event ) => this.handleSubmit( event, this.props.student.id, this.state.tag )}>
                                <input 
                                    name="tag" 
                                    className="add-tag-input" 
                                    type="text" 
                                    placeholder="Add by Tag" 
                                    onChange={ this.handleChange } />
                            </form> 
                        </div>
                    </div> 
                }  
            </div>
        );
    }
}

export default StudentCard;
