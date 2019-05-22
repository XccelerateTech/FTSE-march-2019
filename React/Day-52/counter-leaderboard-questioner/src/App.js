import React from 'react';
import LeaderBoard from './components/LeaderBoard';
import Questioner from './components/Questioner'

function App() {
  return (
    <div className="App">
    <Questioner question="What is your name?"/>
    <LeaderBoard />

    </div>
  );
}

export default App;
