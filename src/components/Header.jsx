import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";
import {FaShoppingCart }from "react-icons/fa";
import {GoPersonFill }from "react-icons/go";
import {useEffect } from "react";
import {NavLink } from "react-router-dom";
import IconoPerfil from "./IconoPerfil";
import { IoMenu } from "react-icons/io5";


function Header() {

  function cerrarSesion() {
    localStorage.removeItem('Usuario')
    localStorage.removeItem('Password')
    window.location.replace('/login')

   
  }

  
    let perfiles = JSON.parse(localStorage.getItem('perfiles'))
    console.log(perfiles);
  

 
  
    
    
    const [menu,setMenu]= useState(false)
    const toggleMenu = ()=>{
      setMenu(!menu)
    }
 
  return (
  <header className="header">
    <div className="header__container">
       <div className="header__menu">
          <h1 className="header__h1">WOOH!</h1>
          <button  className='cabecera__boton' onClick={toggleMenu}>
        <IoMenu className='menu__icon' />
        </button>
         <nav className="header__navegacion">
           <ul className={`header__lista ${ menu? 'isActive':''} `}>
             <li className="header__elementoLista"><Link className="header__linkLista" to={'/'}>Inicio</Link></li>
              {localStorage.getItem("Usuario") == null ? (<></>) : (<li className="header__elementoLista"><Link className="header__linkLista" to={'/servicios'}>Servicios</Link></li>)}
              {localStorage.getItem("Usuario") == null ? (<></>) : (<li className="header__elementoLista"><Link className="header__linkLista" to={'/nosotros'}>Nosotros</Link></li>)}
              {localStorage.getItem("Usuario") == null ? (<></>) : (<li className="header__elementoLista"><Link className="header__linkLista" to={'/Consultas'}>Consultas</Link></li>)}
            </ul>
         </nav>
       </div>
      <div className={`header__panel ${menu? 'activa':''}`}>
        {localStorage.getItem("Usuario") == null ? ( <li className="header__elementoLista"><Link className="header__linkLista" to={"/login"}>Login</Link></li>) :<h2 className="header__saludo">Hola {localStorage.getItem("Usuario")}!</h2>}
        {localStorage.getItem("Usuario") == null ? (<></>) :<button className="header__perfil" type="button"onClick={()=>{ window.location.replace('/miPerfil')}}>{perfiles  == null? <img width={30} src='./assets/logo.png' alt="imagen del perfil"/> :<img width={30} src={perfiles.Foto} alt="perfil"/>}</button>}
       
        {localStorage.getItem("Usuario") == null ? (<></>) :<button className="header__boton" type="button"onClick={cerrarSesion}><FaRegWindowClose /></button>}
       
      </div>
      
    </div>
  </header>
  );
}

export default Header;
