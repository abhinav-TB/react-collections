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
  addninja=(ninja)=>{
    ninja.id=Math.random();
    let ninjas =[...this.state.ninjas,ninja]
    this.setState({
      ninjas:ninjas
    })
  }
  deleteNinja=(id)=>{
   let ninjas=this.state.ninjas.filter(ninja=>{
     return ninja.id!==id
   }) ;
   this.setState({
     ninjas:ninjas
   })

  }
  render(){
  return (
    <div className="App">
     <h1>welcome every one </h1>
     <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
     <Addninja addninja={this.addninja}/>
    </div>
  );
}
}

export default App;
