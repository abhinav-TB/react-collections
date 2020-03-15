import React from 'react';



const ninjas=(props)=> {
    const {ninjas}=props;
    const ninjalist =ninjas.map(ninja=>{
        
        return(
            <div className="ninjas">
                <div>name:{ninja.name}</div>
                <div>age:{ninja.age}</div>
                <div>belt:{ninja.belt}</div>
            </div>
        )
    
})
return(
    <div className="ninja-list">
        {ninjalist}
    </div>
)
}
export default ninjas;