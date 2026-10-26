import React from 'react'
import LoginPage from './pages/LoginPage'
import CreateAccountPage from './pages/CreateAccountPage'
import {Routes,Route} from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import HomePage from './pages/HomePage'
import StationeryPage from './pages/StationeryPage'
import MyNotes from './components/MyNotes'
import SavedNotes from './components/SavedNotes'
import EditNotes from './components/EditNotes'



const App = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/createAccount" element={<CreateAccountPage/>}/>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/products" element={<StationeryPage/>}></Route>
        <Route path="/notes" element={<MyNotes/>}></Route>
        <Route path="/saved/:id" element={<SavedNotes/>}></Route>
        <Route path="/edit/:id" element={<EditNotes/>}></Route>
    </Routes>
    <ToastContainer/>
    </div>
  )
}

export default App
