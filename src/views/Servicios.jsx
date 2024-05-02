import React from 'react'
import{useState, useEffect} from 'react'
import{Link} from 'react-router-dom'



function Servicios() {
  
  const { VITE_LINK_API_SERVICIOS } = import.meta.env;
  const [productos, setProductos] = useState([]);
 
  useEffect(() => {
    const controller = new AbortController();
    const options = {
      metod: "GET",
      headers: {
        "content-type": "application/json",
      },
      signal: controller.signal,
    };
    fetch(VITE_LINK_API_SERVICIOS, options)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.arrayProductos);
      })
      .catch((err) => console.log(err))

      .finally(() => controller.abort());
  }, []);
  
    const [product , setProduct] = useState({})
     console.log(product);
     localStorage.setItem('producto', JSON.stringify(product))
  return (
    <>
    <div className='contenedor'>
        
            {productos.map((producto)=>{
             return <div key={producto._id} className='contenedor__div'>
              <div className='contenedor__foto'>
                 <img className='foto__img' src={producto.Src} alt="ilustracion del servicio" />
                 
                 <div className='titulo__foto'>
                 <h2 className='contenedor__h2' >{producto.Nombre}</h2>
                 </div>
                 </div>
                 {/* <button type='boton' onClick={()=>{
                  setProduct({_id:producto._id,Nombre:producto.Nombre,Src:producto.Src,Precio:producto.Precio})
                  localStorage.removeItem('producto')

                 }}>Agregar al Carrito</button> */}
               </div>
               
            })}

      
    </div>
    </>
  )
}

export default Servicios