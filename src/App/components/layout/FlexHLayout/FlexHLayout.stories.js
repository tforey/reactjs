/* eslint-disable */
import FlexHLayout from './FlexHLayout';

export default {
  title: "FlexHLayout",
};

export const Default = () => <FlexHLayout >
<div style ={{backgroundColor:"silver",padding:"3px",textAlign:"center"}}>The One</div>
<div style ={{backgroundColor:"gainsboro",padding:"3px",textAlign:"center"}}>The Second</div>
</FlexHLayout>

export const Toto = () => <FlexHLayout >
<div style ={{backgroundColor:"red",padding:"3px",textAlign:"center"}}>The One</div>
<div style ={{backgroundColor:"blue",padding:"3px",textAlign:"center"}}>The Second</div>
</FlexHLayout>

Default.story = {
  name: 'default'
};

Toto.story = {
  name: 'toto'
};

