import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import WelcomePage from './pages/WelcomePage/WelcomePage'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<WelcomePage/>} />
        <Route path="/login" element=""/>
        <Route path="/signup" element=""/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="" element=""/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
