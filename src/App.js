import React from 'react';
import './App.scss';

import Students from './containers/StudentsContainer/StudentsContainer';

const App = () => {
    return (
        <div className="main-container">
            <Students />
        </div> 
    );
};

export default App;
