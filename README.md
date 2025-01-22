
- [Story] 
    As a user, I want to start a quiz by selecting a 
    topic so that I can focus on specific areas of the 
    PMP exam.
    - [DONE] User sees a grid of topics, each with its own "Start quiz" button
    - [ ] Clicking on the button starts a quiz of questions with that topic
      - Add a state variable for the selected topic
      - When the user clicks a button, the state var is set to that topic
      - Start quiz (set appropriate state vars)
      - Call .filter on the list of questions 



#### Backlog

- [Feature] Add a background color. Theme.
- [Feature] Hamburger menu for navigation (exiting, home, etc)

- [Bug] Back button leaves the app

- [Tech Debt] Project charter
- [Tech Debt] Refactor the giant JSX returned from the App function
  - (DONE!) Extract out the grid of topic cards
  
