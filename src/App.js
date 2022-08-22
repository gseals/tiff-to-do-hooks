import './App.css';
import data from './data.json';
import React, { useState } from 'react';
// components
import Header from './header';
import TaskList from './TaskList';

function App() {
  const [ taskList, setTaskList] = useState(data);
  return (
    <div className="App">
      <Header/>
      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;
