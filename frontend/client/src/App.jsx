import { useState } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
function App() {

  return (
    <div>

    <Router>
        <Routes> 
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/Signin' element={<Signin/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>} ></Route>
          <Route path='/transfer' element={<SendMoney></SendMoney>}></Route>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
