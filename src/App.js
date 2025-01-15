import './App.css'

import React, { useState } from "react";
import { Button, Typography, Container, Box, Grid, Card, CardContent, CardActions } from "@mui/material";


const App2 = () => {
  return <>
    <Greeting name="Stephen" />
  </>
}

/*

Hints for adding state (toggleable greeting)

Add your state variable to the Greeting component: 

   const [__,__] = React.useState(___)

Add your button to the Greeting component:

  <button onClick={____}>
     Hide Greeting
  </button>

  Make the state variable toggle when button is clicked

Show or hide the greeting based on the state variable:

   HINT: Use a ternary

   {___ ? ___ : ___}

Change the button text to "Show Greeting" based on the state variable.

   HINT: Use another ternary

Have fun! This is a tricky problem, so don't be too hard on yourself if you're stumped at some point.  Just get as far as you can.

*/

const Greeting = (props) => {
  const [shown,setShown] = React.useState(false)

  return <>
    {shown ?
      <>Hello, {props.name}</> :
      ""}
    <br/>
    <button onClick={() => {
      setShown(!shown)
    }}>
      {shown ? "Hide" : "Show"} Greeting
    </button>
  </>
}


const App = () => {
  // Sample topics and questions
  const topics = [
    { id: 1, name: "Scope Management" },
    { id: 2, name: "Risk Management" },
    { id: 3, name: "Time Management" },
    { id: 4, name: "Cost Management" },
  ];

  const questions = [
    {
      id: 1,
      topic: "Scope Management",
      question: "What is the primary purpose of a Work Breakdown Structure (WBS)?",
      options: [
        "Define project costs",
        "Break the project scope into manageable tasks",
        "Identify stakeholders",
        "Monitor project risks",
      ],
      answer: "Break the project scope into manageable tasks",
    },
    {
      id: 2,
      topic: "Risk Management",
      question: "What is a risk register used for?",
      options: [
        "Tracking project issues",
        "Documenting potential risks and responses",
        "Estimating project duration",
        "Assigning resources",
      ],
      answer: "Documenting potential risks and responses",
    },
  ];

  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleStartQuiz = (topic) => {
    setCurrentTopic(topic);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizCompleted(false);
  };

  const handleAnswer = (option) => {
    if (questions[currentQuestionIndex].answer === option) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };


  let gridOfTopics = topics.map((topic) => (
    <Grid item key={topic.id} xs={12} sm={6} md={4}>
    <Card>
        <CardContent>
        <Typography variant="h6" align="center">
            {topic.name}
        </Typography>
        </CardContent>
        <CardActions>
        <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => handleStartQuiz(topic)}
        >
            Start Quiz
        </Button>
        </CardActions>
    </Card>
    </Grid>
  ))

  let topicSelectionPage = <Box>
    <Typography variant="h5" align="center" gutterBottom>
      Topics
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      { gridOfTopics }
    </Grid>
  </Box>

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        PMP Study App
      </Typography>
      {!currentTopic ? topicSelectionPage : (
        <Box>
          <Typography variant="h5" align="center" gutterBottom>
            Quiz: {currentTopic.name}
          </Typography>
          {!isQuizCompleted ? (
            <Box>
              <Typography variant="body1" gutterBottom>
                Question {currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}
              </Typography>
              <Grid container spacing={2}>
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <Grid item xs={12} key={index}>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            <Box textAlign="center">
              <Typography variant="h6" gutterBottom>
                Quiz Completed!
              </Typography>
              <Typography variant="body1">
                Your Score: {score}/{questions.length}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: "20px" }}
                onClick={() => setCurrentTopic(null)}
              >
                Back to Topics
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
};



function Counter(props) {
    //Make a state variable...
    const [count, setCount] = React.useState(0)

    let incrementTheCounter = () => { 
        setCount(count+10)
    }

    let decrementTheCounter = () => { 
        setCount(count-10)
    }

    let backgroundColor = "white"

    if (props.colorToScale == "red")
        backgroundColor = `rgb(${count},0,0)`
    else if(props.colorToScale == "green")
        backgroundColor = `rgb(0,${count},0)`
    else if(props.colorToScale == "blue")
        backgroundColor = `rgb(0,0,${count})`


    return <>
        <Button
            variant="outlined"
            onClick={decrementTheCounter} >
            -
        </Button>
        <span style={{
            padding: 10,
            //fontSize: 30 + count,
            color: 'white',
            borderRadius: 100,
            backgroundColor: backgroundColor 
        }}>{count}</span>
        <Button
            variant="outlined"
            onClick={incrementTheCounter} >
            +
        </Button>
    </>
}







export default App
