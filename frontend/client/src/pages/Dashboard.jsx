import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'
export default function Dashboard() {
  return (
    <div>
      <Appbar></Appbar>
     <Balance amount={999999999998}></Balance>
     <Users ></Users>
     
    </div>
  )
}
