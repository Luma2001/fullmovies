import React from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'

const Login = () => {
  const {login} = useAuth();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const formData =  new FormData(form);
    const {email,password} = Object.fromEntries(formData);

  }


  return (
    <div>
      <h1>Bienvenido a Full Movies</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name='email' placeholder='Ingresar email'/>
        <input type="password" name='password' placeholder='Ingresar contraseña'/>
        <button type='submit' onClick={login}>Iniciar Sesión</button>
      </form>

    </div>
  )
}

export default Login