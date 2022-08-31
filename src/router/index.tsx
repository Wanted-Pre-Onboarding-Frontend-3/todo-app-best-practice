import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from '@/page/main'
import { SignUp } from '@/page/sign-up'
import { SignIn } from '@/page/sign-in'
import { Todos } from '@/page/todos'
import PrivateRoute from '@/components/PrivateRoute'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/todos" element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
