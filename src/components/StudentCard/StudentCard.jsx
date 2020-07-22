import React from 'react';

import './StudentCard.scss';

const StudentCard = ( props ) => {
    const {company, email, firstName, lastName, grades, pic, skill } = props.student;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const average = grades.reduce( reducer, grades.length );

    return (
        <div className="card-container">
            <div className="img-wrapper">
                <img src={pic} alt="avatar" />
            </div>
            <div className="card-body">
                <h1> <span>{firstName}</span> <span>{lastName}</span></h1>
                <p>Email: {email}</p>
                <p>Company: {company}</p>
                <p>Skill: {skill}</p>
                <p>Average: {average}%</p>
            </div>
        </div>
    );
};

export default StudentCard;
