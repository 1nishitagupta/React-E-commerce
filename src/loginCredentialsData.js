import React from 'react'
import { useLoginContext } from './context/loginContext';

const LoginCredentialsData = () => {

    const {details} = useLoginContext();

    const loginCredentialData = [
        {
            email : "nishita@gmail.com",
            password : "1234"
        },
        {
            email : "harsh@gmail.com",
            password : "1234"
        },
        {
            email : "deepesh@gmail.com",
            password : "1234"
        },
        {
            email : "suhani@gmail.com",
            password : "1234"
        },
        {
            email : "mansi@gmail.com",
            password : "1234"
        },
    ]



    let o = loginCredentialData.filter((i)=>{
        if(i.email === details.email && i.password === details.password){
            return true;
        }else{
            return false
        }
    })

  


  return (
    <>
        {
            o.length === 1 ? (<>okayyyyyy</>):(<>nooooooooooooo</>)
        }
    </>
  )
}

export default LoginCredentialsData