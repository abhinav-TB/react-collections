

export const createProject=(project)=>{
    return(dispatch,getState,{getFIrebase,getFirestore})=>{
    const firestore=getFirestore();
    firestore.Collection('projects').add({
        ...project,
        authorFirstName:'net',
        authorLastName:"ninja",
        authorid:"12345",
        createdAt:new Date()
    }).then(()=>{ dispatch({type:'CREATE_PROJECT',project})})
     .catch((err)=>{ dispatch({type:'CREATE_PROJECT_ERROR',err})})
    }
}