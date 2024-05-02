import React from 'react'
import { useState } from 'react'
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Login() {

   const {VITE_LINK_API_LOCALHOST}=import.meta.env
   console.log(VITE_LINK_API_LOCALHOST);
    const [datosUsu,setDatosUsu] = useState({ Usuario:'',Password:''});
    const [login,setLogin] = useState(true);

    function iniciaSesion(e) {
        
        e.preventDefault();
        let controller= new AbortController()
        const options = {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(datosUsu),
            signal: controller.signal
        }

        fetch(VITE_LINK_API_LOCALHOST,options)
        .then(res=>res.json())
        .then(data=>{
                console.log(data);
            if (data.state == 'failed') {
                setLogin(false);
            }else{
                setLogin(true);
                localStorage.setItem('Usuario',datosUsu.Usuario);
                localStorage.setItem('Password',datosUsu.Password);
                 window.location.replace('/');
            }

        })
        .catch(err =>console.log(err))
        .finally(()=>controller.abort())
        
    
    }

    function cambiaCampo(e) {
        let dato = e.target.name; 
        let valor = e.target.value; 

        setDatosUsu({...datosUsu,[dato]:valor})
    }
    
    
  return (
    <>
        <div className='login'>
       
        <form className='formulario__login' action='#' method="post" onSubmit={iniciaSesion}>
        {login == false? <h3>Usuario o contraseña incorrectos</h3>:<></>}
            <h2 className='login__h2'>Login</h2>
            <div className='input-box'>
            <input className='formulario__input' type="text" placeholder='Usuario'required  name="Usuario" id="nom" value={datosUsu.Usuario} onChange={cambiaCampo}/><IoMdPerson className='icono' />
            </div>
            <div className='input-box'>
            <input className='formulario__input' type="text" placeholder='Password'required name="Password" id="pass" value={datosUsu.Password} onChange={cambiaCampo}/><FaLock  className='icono'/>
            </div>
           
            <input className='formulario__boton' type="submit" value="Login" />
            <Link to={"/login/nuevoUsuario"}><p className='login__p'>¿Eres Nuevo Usuario?</p></Link>
        </form>
        </div>

        
    
    </>
  )
}

export default Login