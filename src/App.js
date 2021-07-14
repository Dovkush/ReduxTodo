import React from 'react';
import logo from './logo.svg';

import './App.css';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
       <div className="App">
     <NewTask></NewTask>
     <TaskList></TaskList>
    </div>
    </Provider>
   
  );
}

export default App;
