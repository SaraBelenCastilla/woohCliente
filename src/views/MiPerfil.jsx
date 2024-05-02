import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import IconoPerfil from "../components/IconoPerfil";
function MiPerfil() {
  const { VITE_LINK_API_PERFIL } = import.meta.env;
  const [perfiles, setPerfiles] = useState([]);
  const[foto, setFoto]= useState({})
  console.log(foto);

  useEffect(() => {
    const controller = new AbortController();
    const options = {
      metod: "GET",
      headers: {
        "content-type": "application/json",
      },
      signal: controller.signal,
    };
    fetch(VITE_LINK_API_PERFIL, options)
      .then((res) => res.json())
      .then((data) => {
        setPerfiles(data.arrayPerfiles);
      })
      .catch((err) => console.log(err))

      .finally(() => controller.abort());
  }, []);
  localStorage.setItem('perfiles', JSON.stringify(foto))
  console.log(foto);
  return (
    <><div className="perfiles">
        {/* <Link to={"/miPerfil/nuevoPerfil"}>
                  <MdAddCircleOutline className="plus" />
                </Link>
       */}
       <h2 className="perfiles__h2">Escoge tu Avatar</h2>
       <div className="perfiles__div">
      {perfiles.map((perfil) => {
        return (
         
           
            <div key={perfil._id} className="plantilla">
              <h2 className="plantilla__h2">{perfil.Nombre}</h2>
             <div className="perfil__foto">
              <img className="perfil__img" src={perfil.Foto}alt="" />
             </div>
              <div className="plantilla__div">
               
                <Link to={"/miPerfil/editar/" + perfil._id}>
                  <FaPen className="perfil__icon"/>
                </Link>
                {/* <Link to={"/miPerfil/borrar/" + perfil._id}>
                  <RiDeleteBin7Fill className="perfil__icon" />
                </Link> */}
              </div>
              <button className="perfil__boton" onClick={()=>{
                setFoto({_id:perfil._id,Nombre:perfil.Nombre,Foto:perfil.Foto})
                window.location.replace('/')
                }}>ok</button>
            </div>
       
        );
      })}
     </div>
      </div>
    </>
  );
}

export default MiPerfil;
