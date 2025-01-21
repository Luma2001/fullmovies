import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'

const Home = () => {
const {logout, isLoggedIn} = useAuth();
console.log("Is logged in: " ,isLoggedIn);

  return (
    <div>
        <h1>Próximamente FullMovies</h1>
        <h2>NO TE LO PIERDAS!!!😎</h2>
        <h2>LAS MEJORES PELIS</h2>
        <h2>SAGAS COMPLETAS DE TUS HISTORIAS FAVORITAS</h2>
        <h2>esta es la rama para las pruebas de QA</h2>
        <button onClick={logout}>Cerrar Sesión</button>
  </div>
  )
}

export default Home