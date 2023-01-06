const loginReducer =(state,action)=>{
 if(action.type==="MATCH_DETAILS"){

    
    const {email,password}= action.payload;

    return{
              ...state,
              details :{
                ...state.filters,
                email : email,
                password : password
              }
            }
 }

 return state;
}


export default loginReducer