import React from 'react'

import{useState, useEffect} from 'react'
import { FaPen } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from 'react-router-dom';


 function Consultas() {

 

 
  
    const { VITE_LINK_API_CONSULTA } = import.meta.env;
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const options = {
          metod: "GET",
          headers: {
            "content-type": "application/json",
          },
          signal: controller.signal,
        };
        fetch(VITE_LINK_API_CONSULTA, options)
           .then((res) => res.json())
          .then((data) => {
             setConsultas(data.arrayConsultas);
             console.log(data.arrayConsultas);
           })
           .catch((err) => console.log(err))
    
           .finally(() => controller.abort());
      }, []);
      

  return (
    <><div className='consultas'>
       <h2 className='consultas__h2'>Mis consultas</h2>
      <div className="consultas__div">
        
        <Link to={"/Consultas/nuevaConsulta"}>
              <MdAddCircleOutline className="plus" />
        </Link>
    
        <div  className='consultas__cuadro'>
     
          {consultas.map((consulta)=>{
          
           
             return <div key={consulta._id}>
              {localStorage.getItem('Usuario') == consulta.Usuario? <div className='cuadro__div'>
                
                 <h2 className='contenedor__h2' >{localStorage.getItem('Usuario') == consulta.Usuario? consulta.Nombre:''}</h2>
                 
                 <div className="cuadros__botones">
               
                
                 <Link  to={"/Consultas/editar/" + consulta._id}>
                  <FaPen  className="consultas__icon"/>
                </Link>
               
                
                <Link to={"/consultas/borrar/" + consulta._id}>
                  <RiDeleteBin7Fill  className="consultas__icon" />
                </Link>
                
              </div>
               </div> :''}
               </div>
                
              
          })}
            
            </div> 
     </div>
    </div>
    </>
  )
}
export default Consultas