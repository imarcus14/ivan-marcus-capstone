import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ChatPage from './pages/ChatPage/ChatPage'
import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage'
import SignupPage from './pages/SignupPage/SignupPage'
import WelcomePage from './pages/WelcomePage/WelcomePage'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<WelcomePage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/chat/:username" element={<ChatPage/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
