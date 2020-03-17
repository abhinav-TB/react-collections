import React,{Component} from 'react'

class Addninja extends Component{
    state={
        name: null,
        age:null,
        belt:null
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.addninja(this.state); 
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">name:</label>
            <input type="text" id="name" onChange={this.handlechange}/>
            <label htmlFor="age">age:</label>
            <input type="text" id="age" onChange={this.handlechange}/>
            <label htmlFor="belt">belt:</label>
            <input type="text" id="belt" onChange={this.handlechange}/>
            <button>submit</button>
            </form>
            </div>
        )
    }
}
export default Addninja