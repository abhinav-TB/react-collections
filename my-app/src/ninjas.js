import React from 'react';



const ninjas=(props)=> {
    const {ninjas}=props;
    const ninjalist =ninjas.map(ninja=>{
        if(ninja.age>20){
        return(
            <div className="ninjas" key={ninja.id}>
                <div>name:{ninja.name}</div>
                <div>age:{ninja.age}</div>
                <div>belt:{ninja.belt}</div>
            </div>
        )}
        else{
            return null
        }
    
})
return(
    <div className="ninja-list">
        {ninjalist}
    </div>
)
}
export default ninjas;