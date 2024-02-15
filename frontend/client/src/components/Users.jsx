import React, { useEffect, useState } from 'react'
import Button from './Button';
import axios from 'axios';

export default function Users() {

    const [users,setUsers] = useState([]);
    const [filter,setFilter] = useState('');

    useEffect(()=>{

      axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then(response=>{
             setUsers(response.data.user);
      })
    },[filter])


  return (
    <div>
    <div className='font-bold mt-6 text-lg'>
      Users
    </div>
    <div className='my-2'>
       <input type="text" placeholder='Search users...' className='w-full px-2  py-1 border rounded border-slate-200'/>
    </div>
    <div>
        {users.map(user => <User user={user}/>)}
    </div>
    </div>
  )
}

function User({user}){
    return(<div className='flex justify-between'>
        <div className=' flex'>
            <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 '>
                <div className='flex flex-col justify-center h-full text-xl'>

             {user.firstName[0]}

                </div>
            </div>
            <div className='flex flex-col justify-center h-full'>
              <div>
                {user.firstName} {user.lastName}
              </div>
            </div>
        </div>
        <div className='flex flex-col'>
            <Button onClick={(e)=>{
              Navigate("/send?id"+user._id+"&name"+user.firstName);
            }} label={"Send Money"}></Button>
            </div>
            </div>
    )
}