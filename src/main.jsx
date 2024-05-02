import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Inicio from './views/Inicio'
import Servicios from './views/Servicios'
import DetallesProductos from './views/DetallesProducto'
import NuevoUsuario from './views/NuevoUsuario'
import Login from './views/Login'
import Footer from './components/Footer'
import MiPerfil from './views/MiPerfil'

import EditarPerfiles from './views/EditarPerfiles'

import Consultas from './views/Consultas'
import EditarConsultas from './views/EditarConsultas'
import BorrarConsultas from './views/BorrarConsultas'
import NuevaConsulta from './views/NuevaConsulta'
import Nosotros from './views/Nosotros'



import './css/style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 
  

  <Router>

  <Header/>
  
    <Routes>

       <Route path='/' element={<Inicio/>}/> 
      <Route path='/login' element={localStorage.getItem('Usuario') == null? <Login/>:<Inicio/>}/>
      <Route path ='/login/nuevoUsuario' element = {<NuevoUsuario/>}/>
      <Route path ='/servicios' element = {localStorage.getItem('Usuario') ==null? <Login/>:<Servicios/>}/>
      <Route path ='/nosotros' element = {localStorage.getItem('Usuario') ==null? <Login/>:<Nosotros/>}/>
      {/* <Route path ='/productos/:id' element = {localStorage.getItem('Usuario') ==null? <Login/>:<DetallesProductos/>}/> */}
     
      <Route path ='/miPerfil' element = {localStorage.getItem('Usuario') ==null? <Login/>:<MiPerfil/>}/>
      <Route path ='/miPerfil/editar/:id' element = {localStorage.getItem('Usuario') ==null? <Login/>:<EditarPerfiles/>}/>
      
      
     
      <Route path ='/Consultas' element = {localStorage.getItem('Usuario') ==null? <Login/>:<Consultas/>}/>
      <Route path ='/Consultas/editar/:id' element = {localStorage.getItem('Usuario') ==null? <Login/>:<EditarConsultas/>}/>
      <Route path ='/Consultas/borrar/:id' element = {localStorage.getItem('Usuario') ==null? <Login/>:<BorrarConsultas/>}/>
      <Route path ='/Consultas/nuevaConsulta' element = {localStorage.getItem('Usuario') ==null? <Login/>:<NuevaConsulta/>}/>
     
    </Routes>

    <Footer/>

  </Router>

  </>
)
