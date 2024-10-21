import React from 'react';
import './Quizpage.css';
import { Container, Stack, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Quizpage = () => {

    const navigate = useNavigate();

    const handleQuizClick = (quizType) => {
        navigate(`/Quiztype/${quizType}`);
    };

    return (
        <Container className='pt-5'>
            <Stack gap={3} >
                <h2>Select a Quiz</h2>
                <Stack direction='vertical'>
                    <Button className='btn-1' onClick={() => handleQuizClick('react')}>
                        Front End Developing Using React 
                    </Button>
                    <Button className='btn-1 mt-2' onClick={() => handleQuizClick('angular')}>
                        Front End Developing Using Angular
                    </Button>
                    <Button className='btn-1 mt-2' onClick={() => handleQuizClick('dotnet')}>
                        Back End Developing Using .Net
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Quizpage