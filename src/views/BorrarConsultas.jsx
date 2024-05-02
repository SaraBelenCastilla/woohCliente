import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function BorrarConsultas() {
  let{ id } = useParams()
    let navigate =useNavigate()
   function regresar() {
    navigate('/Consultas')
   }
   function eliminar() {
    const controller = new AbortController();
    const {VITE_LINK_API_CONSULTA} = import.meta.env
    const options = {
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
        signal:controller.signal,
        body: JSON.stringify( { _id: id } )
    }

    fetch(VITE_LINK_API_CONSULTA,options)
    .then(res=>res.json())
    .then(data=>{
      if (data.status == 'success') {
        window.location.href = '/Consultas';
      }
    })
    .catch((err) => console.log(err))

    .finally(() => controller.abort());
   }
  return (
    <div className='borrar'>
    <div className='borrar__div'>
        <h2 className='borrar__h2'>¿Estas seguro de que quieres eliminar la Consulta?</h2>
        <div className='borrar__botones'>
        <button className='boton' type='button' onClick={eliminar}>Eliminar</button>
        <button className='boton' type='button' onClick={regresar}>volver</button>
        </div>
    </div>
    </div>
  )
}

export default BorrarConsultas