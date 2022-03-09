import React ,{FC} from 'react';
import './App.css';
import './cardStyle.css';
import {Person} from './person';

const App:FC=()=> {

  return (
<div className="App">
  <Person name="Pedro" age={20} email="abx@xyz.com" />
</div>
  );
}

export default App;
