import React,{Component} from 'react';
import Todos from'./Todos'

class App extends Component{
  state={
    todos:[
      {id:1,content:'buy some milk'},
       {id:1,content:'play mario cart'}
    ]
  }
  render(){
    return(
      <div className="App">
       <h1 class Name="center blue-text">Todo,s</h1>
       <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;
