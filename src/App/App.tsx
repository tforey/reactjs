import { ImageInterface, MemeInterface, MemeSVGViewer } from "orsys-tjs-meme";
import { DummyMeme } from "./interfaces/dummyMeme";
import React from "react";
import "./App.css";
import MemeForm from "./components/feature/MemeForm/MemeForm";
import FlexHLayout from "./components/layout/FlexHLayout/FlexHLayout";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import Button from "./components/ui/Button/Button";
//import Store from "./components/store/";

interface IAppState {
  meme: MemeInterface;
  images: Array<ImageInterface>;
}
interface IAppProps {}

class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      meme: DummyMeme,
      images: [],
    };
  }

  componentDidMount(): void {
  //  console.log(uneValueToDelete);
    fetch(`http://localhost:3000/images`)
      .then(r=>r.json(),r=>[])
      .then(ar=>this.setState({images:ar}));
  }

  render() {
    return (
      <div className="App">
        <Button >To load</Button>
        <Header />
        <FlexHLayout style={{ height: "89vh" }}>
          <MemeSVGViewer basePath="/img/meme/" image={this.state.images.find(elt =>elt.id===this.state.meme.imageId)} meme={this.state.meme} />
          <MemeForm
            meme={this.state.meme}
            images={this.state.images}
            onMemeValueChange={(newMeme: MemeInterface) =>
              this.setState({ meme: newMeme })
            }
          />
        </FlexHLayout>
        <Footer />
      </div>
    );
  }
}

export default App;
