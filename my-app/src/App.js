import React,{Component} from 'react';
import Ninjas from './ninjas.js';

class App extends Component{
  render(){
  return (
    <div className="App">
     <h1>welcome every one </h1>
     <Ninjas name="ryu" age="25" belt="black"/>
     <Ninjas name="abhinav" age="18" belt="bue"/>
    </div>
  );
}
}

export default App;
