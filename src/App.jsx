import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectRoute from './auth/ProtectRoute';
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Chat = lazy(() => import('./pages/Chat'))
const Group = lazy(() => import('./pages/Group'))
const Pagenotfound = lazy(() => import('./pages/pagenotfound'))
let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path='/' element={<Home />} />
          <Route path='/chat/:chatId' element={<Chat />} />
          <Route path='/group' element={<Group />} />
        </Route>
        <Route path='/login' element={<ProtectRoute user={!user} redirect='/'>
          <Login />
        </ProtectRoute>} />
        <Route path='*' element={<Pagenotfound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
