import './App.css';
import React from 'react';

import LeftBar from './Components/LeftBar/LeftBar';
import DashboardHead from './Components/DashboardHead/DashboardHead';
import Tasks from './Components/Tasks/Tasks';
import Welcome from './Components/Welcome/Welcome';
import TasksPriorities from './Components/TasksPriorities/TasksPriorities';
import ActivityFeed from './Components/ActivityFeed/ActivityFeed';

function App() {
  return (
    
      <>
      <div className="app">
        <div>
          <LeftBar/>
        </div>
        <div>
          <DashboardHead/>
          <Welcome/>
          <div className="splitContainer">
            <div className="left">
              <Tasks/>
            </div>
            <div className="right">
              <TasksPriorities/>
              <ActivityFeed/>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default App;
