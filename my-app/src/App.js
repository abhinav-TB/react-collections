import React,{Component} from 'react';
import Ninjas from './ninjas.js';
import  Addninja  from "./addninja";

class App extends Component{
  state={
    ninjas :[
      {name:"ryu",age:30,belt:"black",id :1},
      {name:"abhinav",age:18,belt:"black",id :2},
      {name:"nazim",age:19,belt:"orange",id :3}

    ]
  }
  render(){
  return (
    <div className="App">
     <h1>welcome every one </h1>
     <Ninjas ninjas={this.state.ninjas}/>
     <Addninja/>
    </div>
  );
}
}

export default App;
