import React, { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

      const [firstName,setFirstName] = useState("");
      const [lastName,setLastName] = useState("");
      const [username,setUsername] = useState("");
      const [password,setPassword] = useState("");
      const navigate = useNavigate();

  return (
    <div className='bg-slate-300 h-screen flex justify-center  '>
        <div className='flex flex-col justify-center'>
    <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
      <Header label={"Signup"} ></Header>
      <SubHeading label={"Enter your infromation to create an account"}></SubHeading>

        <InputBox onChange={(e) => {
       setFirstName(e.target.value) ;
      }} placeholder={"John"} label={"First Name"} >

      </InputBox>
      
      <InputBox onChange={(e)=>{
        setLastName(e.target.value);
      }} placeholder={"doe"} label={"Last Name"}>
      </InputBox>

      <InputBox  onChange={() => {
        setUsername("e.target.value")
      }}
      placeholder={"gopalepic@gmail.com"} label={"Email"}></InputBox>

      <InputBox onChange={(e) => {
        setPassword("e.target.value");
      }} label={"Password"}>
      </InputBox>

      
      <div className='p-8'> 
      <Button label={"Sign Up"} onClick={async() => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
          username,
          firstName,
          lastName,
          password
        });
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
      }}></Button>
       </div>
    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={'/Signin'}></BottomWarning>
    </div>
    </div>
    </div>
  )
}
