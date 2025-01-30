import './App.css'

import React, { useState } from "react";
import { Button, Typography, Container, Box, Grid, Card, CardContent, CardActions } from "@mui/material";
import TopicList from './TopicList';
import Quiz from './Quiz';

import PMPQuestions_01_28_2025 from "./data/pmp_unique_questions.json"
import PMP_David_M_ScenarioQuestions1 from "./data/pmp_scenario_questions_1.json"
import DeepSeek_Scenario_Questions from "./data/deep_seek_scenario_questions.json"

const Greeting = (props) => {
  const [shown, setShown] = React.useState(false)

  return <>
    {shown ?
      <>Hello, {props.name}</> :
      ""}
    <br />
    <button onClick={() => {
      setShown(!shown)
    }}>
      {shown ? "Hide" : "Show"} Greeting
    </button>
  </>
}


const App = () => {

  const questions = [
    {
      id: 1,
      topics: ["Scope Management"],
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
      topics: ["Risk Management"],
      question: "What is a risk register used for?",
      options: [
        "Identify potential risks",
        "Track project progress",
        "Define project scope",
        "Monitor project costs",
      ],
      answer: "Identify potential risks",
    },
    {
      "id": 8,
      "topics": ["Quality Management"],
      "question": "You have been working closely with the quality manager of your project, planning the budget for the project phase that is due to begin in the next two months. They mention the need to budget for appraisal costs, to avoid quality issues in the future. What will you do next?",
      "options": [
        "Ensure there is enough for training the staff to reduce the number of errors.",
        "Ensure there is enough for a quality tester to verify the deliverables against agreed specifications.",
        "Ensure there is enough to create a quality assurance plan.",
        "Ensure there is enough to allow for rework or rectification when defects are found."
      ],
      "answer": "Ensure there is enough for a quality tester to verify the deliverables against agreed specifications."
    },
      {
        "id": 9,
        "topics": ["Cost of Quality"],
        "question": "Which of the following is an example of a prevention cost in the Cost of Quality?",
        "options": [
          "Conducting training for team members to improve their skills.",
          "Performing product inspections to identify defects.",
          "Fixing a defect identified during testing.",
          "Processing warranty claims for defective products."
        ],
        "answer": "Conducting training for team members to improve their skills."
      },
      {
        "id": 10,
        "topics": ["Cost of Quality"],
        "question": "What type of cost is incurred when a customer returns a defective product?",
        "options": [
          "Appraisal cost",
          "Prevention cost",
          "Internal failure cost",
          "External failure cost"
        ],
        "answer": "External failure cost"
      },
      {
        "id": 11,
        "topics": ["Cost of Quality"],
        "question": "Which activity falls under appraisal costs in the Cost of Quality framework?",
        "options": [
          "Developing a quality management plan.",
          "Inspecting materials before production.",
          "Performing rework to fix defects.",
          "Providing customer support for warranty claims."
        ],
        "answer": "Inspecting materials before production."
      },
      {
        "id": 12,
        "topics": ["Cost of Quality"],
        "question": "Which of the following is NOT included in the Cost of Quality?",
        "options": [
          "Prevention costs",
          "Appraisal costs",
          "Marketing costs",
          "Failure costs"
        ],
        "answer": "Marketing costs"
      },
      {
        "id": 13,
        "topics": ["Cost of Quality"],
        "question": "What is the primary goal of investing in prevention costs?",
        "options": [
          "To identify defects during production.",
          "To reduce the likelihood of defects occurring.",
          "To address defects after customer delivery.",
          "To improve the speed of project delivery."
        ],
        "answer": "To reduce the likelihood of defects occurring."
      },
      {
        "id": 14,
        "topics": ["Cost of Quality"],
        "question": "What type of cost is associated with rework or scrap due to errors identified during production?",
        "options": [
          "Appraisal cost",
          "Prevention cost",
          "Internal failure cost",
          "External failure cost"
        ],
        "answer": "Internal failure cost"
      },
      {
        "id": 15,
        "topics": ["Cost of Quality"],
        "question": "Performing audits to verify that a process meets quality standards is an example of:",
        "options": [
          "Prevention cost",
          "Appraisal cost",
          "Internal failure cost",
          "External failure cost"
        ],
        "answer": "Appraisal cost"
      },
      {
        "id": 16,
        "topics": ["Cost of Quality"],
        "question": "Which of the following best describes external failure costs?",
        "options": [
          "Costs related to training the team to prevent defects.",
          "Costs incurred from defects found after the product is delivered to the customer.",
          "Costs incurred from testing and inspections during production.",
          "Costs related to rework or scrap before delivery."
        ],
        "answer": "Costs incurred from defects found after the product is delivered to the customer."
      },
      {
        "id": 17,
        "topics": ["Cost of Quality"],
        "question": "What is the relationship between prevention costs and failure costs?",
        "options": [
          "As prevention costs increase, failure costs typically decrease.",
          "As prevention costs increase, failure costs typically increase.",
          "Prevention costs and failure costs are unrelated.",
          "Failure costs are unaffected by prevention efforts."
        ],
        "answer": "As prevention costs increase, failure costs typically decrease."
      },
      {
        "id": 18,
        "topics": ["Cost of Quality"],
        "question": "What is the primary focus of appraisal costs in the Cost of Quality?",
        "options": [
          "Reducing the occurrence of defects.",
          "Identifying defects before the product is delivered.",
          "Repairing defects found during production.",
          "Minimizing customer complaints."
        ],
        "answer": "Identifying defects before the product is delivered."
      }
  ]
    .concat(PMPQuestions_01_28_2025)
    .concat(PMP_David_M_ScenarioQuestions1)
    .concat(DeepSeek_Scenario_Questions)
      .map((q) => { if(!q.topics) q.topics = [q.topic]; return q });

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const topics = questions.map((q) => q.topics).flat().filter(onlyUnique).map((t) => { return {name: t} })

  const [currentTopic, setCurrentTopic] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const filterQuestionsByTopic = (selectedTopics) => {
    console.log(questions)
    return questions.filter(question => 
      question.topics.some(topic => selectedTopics.includes(topic))
    );
  };

  const handleStartQuiz = (topic) => {
    setCurrentTopic(topic);
    const filtered = filterQuestionsByTopic([topic.name]);
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
