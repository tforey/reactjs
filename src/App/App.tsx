import React from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";
interface IAppState{
    //valeur uniquement pour la compil qui va vérifié la déclaration correspond à une empreinte
    counter:number
    //constante
    uneValue:"Hello World!"
    type:string
}
interface IAppProps{}

class App extends React.PureComponent <IAppProps,IAppState> {
  constructor(props:IAppProps) {
    super(props);
    this.state = {uneValue:"Hello World!", counter: 6,type:"button" };
  }
  componentDidUpdate(oldProps:IAppProps,oldState:IAppState) {
    console.log(
      "apres le changement (fin des traitements async)",
      this.state.counter
    );
    console.log(
      "on voit qu'on a dans l'arguments les anciennes valeurs",
      arguments
    );
  }

  render() {
    return (
      <div className="App">
        Nombre de click : {this.state.counter}
        <hr />
        <Button
          style={{color:"black"}}
          backgroundColor="blue"
          onButtonClick={() => {
            this.setState({ counter: this.state.counter - 1 });
            console.log(
              "counter à fin du onClick (traitement async de setState) ",
              this.state.counter
            );
          }}
        > Hello</Button>
        {/* style & children obligatoire (ligne 7 et 8 de Button.tsx) // backgroundcolor facultatif (ligne 6 de Button.tsx) //onButtonClick valeur obligatoire mais avec une défaut  (ligne 5 + 56 de Button.tsx)*/}
        <Button style={{color:"white"}} type={"reset"}>submit</Button>
        <Button style={{color:"red"}} type={"submit"}>reset</Button>
      </div>
    );
  }
}

export default App;
