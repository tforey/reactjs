import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

class App extends React.PureComponent{
  constructor(props){
    super(props);
    this.state={counter:6};
  }
  componentDidUpdate(){
  console.log('apres le changement (fin des taitements async)', this.state.counter);
  console.log('on voit qu\'on a dans l\'arguments les anciennes valeurs',arguments);    
  }

  render(){
    return(
           <div className="App">
        Nombre de click : {this.state.counter}<hr/>
        <Button onButtonClick={()=>{
          this.setState({counter:(this.state.counter-1)});
          console.log('counter à fin du onClick (traitement async de setState) ',this.state.counter);
          }}
          >Click-1</Button> 
        <Button>Click+1</Button>
     </div>
    );
  }
}

// function App() {
//   let counter=0;
//   return (
//     <div className="App">
//        Nombre de click : {counter}
//        <Button onButtonClick={()=>{counter--;console.log(counter)}}><img/>Click-1</Button>
//        <Button>Click+1</Button>
//     </div>
//   );
// }

export default App;
