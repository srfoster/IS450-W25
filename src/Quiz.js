import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Quiz = ({ questions, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleAnswer = (option) => {
    if (questions[currentQuestionIndex].answer === option) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizCompleted(true);
      onQuizComplete(score);
    }
  };

  if (isQuizCompleted) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <Typography variant="h4" component="div" gutterBottom>
          Quiz Completed!
        </Typography>
        <Typography variant="h6" component="div">
          Your score: {score}
        </Typography>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <Typography variant="h5" component="div" gutterBottom>
        {questions[currentQuestionIndex].question}
      </Typography>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <Button 
          key={index} 
          variant="contained" 
          color="primary" 
          onClick={() => handleAnswer(option)} 
          sx={{ mt: 1 }}
        >
          {option}
        </Button>
      ))}
    </Box>
  );
};

export default Quiz;