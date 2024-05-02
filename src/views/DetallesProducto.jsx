import React from 'react'
import{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

function DetallesDeProductos() {
const[producto,setProducto]=useState([])
    let {id} = useParams()
    
    useEffect(()=>{
        const controller = new AbortController
    const options ={
        metod:'GET',
        headers: {
            'content-type':'application/json'
        },
        signal: controller.signal

        }

    fetch('http://localhost:3000/productos/detallesProducto?id='+id)
    .then(res=>res.json())
    .then(data=>setProducto(data))
    .finally(()=>controller.abort);

    },[])
  return (<>
    <div className='tarjeta'>
        <h2 className='tarjeta__h2'>{producto.nombre}</h2>
        <h2 className='tarjeta__h2'>Precio:{producto.precio} $</h2>
        <p className='tarjeta__parrafo'>{producto.descripcion}</p>
    </div>
    </>
  )
}

export default DetallesDeProductos