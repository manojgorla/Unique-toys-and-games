import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProctectRoutes from './Routes/ProctectRoutes'
import LoandingPage from './Pages/LoandingPage'
import AuthPage from './Pages/AuthPage'
import Home from './Pages/Home'
import NotFoundPage from './Components/NotFoundPage'
import UserLayout from './Layout/UserLayout';
import GamesPage from './Pages/GamesPage';
import EachGameView from './Components/EachGameView'
import IdeaDetailView from './Components/IdeaDetailView'

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/loading" element={<LoandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/pagenotfound" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to='/pagenotfound' />} />
        <Route element={<ProctectRoutes />}>
          <Route element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path='/games' element={<GamesPage />} />
          </Route>
          <Route path='/game/:name' element={<EachGameView />} />
          <Route path='/idea/:name' element={<IdeaDetailView />} />
        </Route>

      </Routes>
    </Router>
  </>

)

export default App



