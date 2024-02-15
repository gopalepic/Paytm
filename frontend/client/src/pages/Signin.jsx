import React, { useState } from 'react'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import SubHeading from '../components/SubHeading'
import axios from 'axios'


export default function Signin() {

       const [username,setUsername] = useState('');
       const [password,setPassword] = useState("");

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
    <div className='flex flex-col justify-center '>
    <div className='bg-white w-80 text-center p-4 h-max rounded-sm '>
      <Header label={"Sign In"}></Header>
      <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
      <InputBox
      onChange ={
        (e)=>{
          setUsername(e.target.value)
        }
      }
      label={"Email"} placeholder={"gopalepic@gmail.com"}></InputBox>


      <InputBox 
      onChange = {
        (e)=>{
          setPassword(e.target.value);
        }
      }
      label={"Password "} ></InputBox>
      <div className='pt-4'>     
       <Button label={"Sign In"} onClick={async()=>{
          const response =  await axios.post("http://localhost:3000/api/v1/user/signin",{
            username,
            password
          });
          localStorage.setItem("token" , response.data.token)
       }}>

       </Button>
</div>
      <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/Signup"} ></BottomWarning>


     </div>
     </div>
     </div>
  )
}
