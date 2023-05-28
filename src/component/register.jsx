import React from "react";
import "./index.css";
import "./utilities.css";
import "./register.css";
import { useNavigate } from 'react-router-dom';

import { FaAddressCard } from "react-icons/fa";

export const Register = ({ user, setUser }) => {

  const handleClick = e => {
    
    setUser({
      ...user,
      [e.target.name]: e.target.value
     
    })
    console.log(user)
    
  }

  let {nombre, telefono, email, licencia, genero, edad} = user

  const navigate = useNavigate();

  const handleSubmit = () => {


      let numlic = 0

      if(licencia === "vigente") {
        numlic = 1
      } 
      else if (licencia === "no_vigente") {
        numlic = 0
      }

      const user = {
        nombre: nombre,
        telefono: telefono,
        email: email,
        licencia: numlic,
        genero: genero,
        edad: parseInt(edad)
      };

      const requestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
      }

      fetch('http://localhost:5189/api/Usuario/create', requestInit)
      .then ((res) => res.json())
      .then ((res) => {
          console.log(res)
      })

      setUser({
        nombre: '',
        telefono: '',
        email: '',
        licencia: '',
        genero: '',
        edad: ''
      })

      navigate('/log-in');
  }

  return (
    <div>
      <h1></h1>
      <center><h2>Registro de Sesión</h2></center>

      <div className="register-form-container">
        <center>
          <FaAddressCard className="FaAddressCard"></FaAddressCard>
        </center>

        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            name="nombre"
            onChange={handleClick}
            required
          />

          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            name="telefono"
            onChange={handleClick}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={handleClick}
            required
          />

          <label htmlFor="licencia">Licencia:</label>
          <select
            id="licencia"
            value={licencia}
            name="licencia"
            onChange={handleClick}
            required
          >
            <option value="vigente">Vigente</option>
            <option value="no_vigente">No vigente</option>
          </select>

          <label htmlFor="genero">Género:</label>
          <select
            name="genero"
            value={genero}
            onChange={handleClick}
            required
          >
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="indefinido">Indefinido</option>
          </select>

          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            value={edad}
            name="edad"
            onChange={handleClick}
            required
          />

          <center><button type="submit">Enviar</button></center>
        </form>
      </div>
    </div>
  );
};

export default Register;
