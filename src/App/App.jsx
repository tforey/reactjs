import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './components/ui/Button/Button'
import SimpleButton from './components/ui/Button/Button'

function App() {
  return (
    <div className="App">
       <Button text="via la prop 'text'"/>
       <Button>via le 'children'</Button> 
       <SimpleButton text="encore pas le 'text'"/>
       <Button>par le children version 1</Button>
       <Button children="par le children version 2"/>
    </div>
  );
}

export default App;
