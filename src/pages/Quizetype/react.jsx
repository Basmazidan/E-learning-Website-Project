import React, { useState } from 'react';
import { Container, Stack, Button } from 'react-bootstrap';
import './react.css';
import mcqReactData from '../../data/mcqreact.json';


const ReactQuiz = () => {
    const [index, setIndex] = useState(0);
    const [lock, setLock] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const mcqReact = mcqReactData.mcqReact;
    const question = mcqReact[index];
    const [score, setScore] = useState(0)


    const checkAns = (e, answer) => {
        if (!lock) {
            setSelectedAnswer(answer);
            if (question.answer === answer) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1)
            }
            else {
                e.target.classList.add("wrong")
                setLock(true);
            }
        }
    }

    const handelNext = () => {
        if (index < mcqReact.length - 1) {
            setIndex(index + 1);
            setLock(false);
            setSelectedAnswer(null);
        } else {
            finishQuiz();
        }
    };
    const finishQuiz = () => {
        alert(`Your total score is: ${score}/${mcqReact.length}`);
    };

    return (
        <Container className='react'>
            <Stack gap={3} >
                <h3>React Quiz</h3>
                <Stack className='quizbox' direction='vertical'>
                    <p style={{ color: 'black' }}>{index + 1}. {question.question}</p>

                    {question.choices.map((choice, idx) => {

                        const isCorrect = question.answer === choice;
                        const isSelected = selectedAnswer === choice;

                        return (
                            <Button
                                key={idx}
                                onClick={(e) => checkAns(e, choice)}
                                className={`reactbtn btn btn-light mt-3 
                                ${lock && isCorrect ? 'correct' : ''} 
                                ${lock && !isCorrect && question.answer === choice ? 'correct' : ''}
                                ${lock && isSelected && !isCorrect ? 'wrong' : ''} 
                                ${isSelected && !lock ? 'selected' : ''}`}>

                                {choice}
                            </Button>
                        );
                    })}
                    <Button className='nextbtn mt-5' onClick={handelNext} disabled={!lock}>Next</Button>
                    <div className="index">{index + 1} of {mcqReact.length} questions
                    </div>
                </Stack>
            </Stack>
        </Container>
    );
};

export default ReactQuiz;
