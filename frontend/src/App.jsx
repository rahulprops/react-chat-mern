import { lazy, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const MainContainer =lazy(()=>import('./Components/MainContainer'))
const Login=lazy(()=>import('./pages/Login'))
const Chat=lazy(()=>import('./pages/Chat'))
const Group=lazy(()=>import('./pages/Group'))

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainContainer/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/chat/:id' element={<Chat/>} />
        <Route path='/groups' element={<Group/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
