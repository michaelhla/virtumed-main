import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import Home from './pages/home';
import Class from './pages/class';
import Instructor from './pages/instructor';
import Navbar from './components/navbar/navbar';
import Login from './pages/login/login'
import Signup from './pages/signup'
import Appt_room from './pages/appt_room/appt_room'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

class App extends Component {
  render() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = 'class' element = {<Class/>}/>
        <Route path = 'instructor' element = {<Instructor/>}/>
        <Route path = 'login' element = {<Login/>}/>
        <Route path = 'signup' element = {<Signup/>}/>
        <Route path = 'appointment' element = {<Appt_room/>}/>
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </>
   
  );
  }
}
export default App
