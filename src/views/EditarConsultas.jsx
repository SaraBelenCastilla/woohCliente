import React from 'react'
import { useState,useEffect } from 'react'
import{useParams} from 'react-router-dom'

function EditarConsultas() {
    let{id}= useParams()
    const [datosConsultas,setDatosConsultas] = useState({})
    const {VITE_LINK_API_CONSULTA}=import.meta.env
    useEffect(()=>{

        const controller = new AbortController()
        const options={
           metod:'GET',
           headers: {
               'content-type':'application/json'
     
           },
           signal:controller.signal
       }
       fetch(VITE_LINK_API_CONSULTA+'/'+id,options)
       .then(res=>res.json())
       .then(data=>{
        setDatosConsultas(data)
       })
       .catch((err) => console.log(err))

      .finally(() => controller.abort());
       
    },[])
    function cambiarValor(e) {
      let nombre= e.target.name;
      let valor = e.target.value;
      setDatosConsultas({...datosConsultas,[nombre]:valor});
    }
    function enviarFormulario(e) {
      e.preventDefault()
      const controller = new AbortController();
      const {VITE_LINK_API_CONSULTA} = import.meta.env
      const options = {
          method:'PUT',
          headers:{
              'Content-Type': 'application/json'
          },
          signal:controller.signal,
          body: JSON.stringify( datosConsultas )
      }
  
      fetch(VITE_LINK_API_CONSULTA,options)
      .then(res=>res.json()).then(data=>{
        if (data.status == 'success') {
            window.location.href = '/Consultas';
        }
    })
     
     
      
    }
  return (
    <>
    <div className='editar__div'>
    <form className='formulario__editar' action='#' method="post" onSubmit={enviarFormulario} >
       <h2 className='editar__h2'>Editar</h2>
       <div className='input-box'>
       <input className='input' type="text" placeholder='Nombre'required  name="Nombre" id="nom" value={datosConsultas.Nombre||''} onChange={cambiarValor}/>
       </div>
       <div className='input-box'>
       <textarea className='textarea' name="Motivo" id="motiv" cols="49" rows="3" placeholder='Motivo'value={datosConsultas.Motivo||''} onChange={cambiarValor}></textarea>
       </div>
       <div className='input-box'>
       <input className='input' type="text" placeholder='Telefono'required name="Telefono" id="telf" value={datosConsultas.Telefono||''} onChange={cambiarValor}/>
       </div>
       <div className='input-box'>
       <input className='input' type="text" placeholder='Email'required name="Email" id="email" value={datosConsultas.Email||''} onChange={cambiarValor}/>
       </div>
      
       <input className='boton' type="submit" value="ok" />
   </form>
</div>
</>
  )
}
export default EditarConsultas
