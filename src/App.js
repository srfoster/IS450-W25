import './App.css'

import React, { useState } from "react";
import { Button, Typography, Container, Box, Grid, Card, CardContent, CardActions } from "@mui/material";
import TopicList from './TopicList';
import Quiz from './Quiz';

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
        "Identify potential risks",
        "Track project progress",
        "Define project scope",
        "Monitor project costs",
      ],
      answer: "Identify potential risks",
    },
    // ...other questions
  ];

  const [currentTopic, setCurrentTopic] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const handleStartQuiz = (topic) => {
    setCurrentTopic(topic);
    const filtered = questions.filter(q => q.topic === topic.name);
    setFilteredQuestions(filtered);
  };

  const handleQuizComplete = (score) => {
    console.log(`Quiz completed with score: ${score}`);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {!currentTopic ? (
        <TopicList topics={topics} onSelectTopic={handleStartQuiz} />
      ) : (
        <Quiz questions={filteredQuestions} onQuizComplete={handleQuizComplete} />
      )}
    </div>
  );
};

export default App;
