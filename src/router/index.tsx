import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from '../page/main'
import { SignUp } from '../page/sign-up'
import { SignIn } from '../page/sign-in'
import { Todos } from '../page/todos'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/auth" element={<Login />} />*/}
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
