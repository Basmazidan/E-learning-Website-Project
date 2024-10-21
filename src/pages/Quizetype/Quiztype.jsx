import React from 'react';
import Angular from './angular';
import ReactQuiz from './react'; 
import DotNetQuiz from './dotnet'; 

const Quiztype = ({ quizType }) => {
    switch (quizType) {
        case 'Angular':
            return <Angular />;
        case 'React':
            return <ReactQuiz />;
        case 'Net':
            return <DotNetQuiz />;
        default:
            return <div>Please select a quiz type.</div>;
    }
};
export default Quiztype;