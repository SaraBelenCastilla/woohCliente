import React from 'react'
import Productos from './Servicios'


function Inicio() {
  return (
    <>
    <main className='main'>
        <h2 className='h2__main'>Bienvenido a Wooh!</h2>
        <p className='main__parrafo'>Gestiona  todas tus consultas veterinarias de forma rapida y fácil</p>
    </main>
    <Productos/>
    </>
  )
}

export default Inicio