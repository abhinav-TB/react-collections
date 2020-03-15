import React,{Component} from 'react';



class ninjas extends Component{
    render(){
        console.log(this.props);
        const{name,age,belt}=this.props;
        return(
            <div className="ninjas">
                <div>name:{name}</div>
                <div>age:{age}</div>
                <div>belt:{belt}</div>
            </div>
        )
    }
}
export default ninjas;