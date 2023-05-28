import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import './login.css'


const Login = () => {
  const [user, setUser] = useState({ email: "", nombre: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.nombre === "" || user.email === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    const userData = { email: user.email, nombre: user.nombre };

    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };

    fetch("http://localhost:5189/api/loginclient/authenticate", requestInit)
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "Ingreso con exito") {
          console.log("Inicio de sesión exitoso");
          // Realiza acciones adicionales aquí para manejar el inicio de sesión exitoso
          // ...
          navigate("/");
          setUser({ email: "", nombre: "" });
        } else {
          console.log("Inicio de sesión fallido");
          // Realiza acciones adicionales aquí para manejar el inicio de sesión fallido
          // ...
          alert("Error al iniciar sesión. Por favor, intenta nuevamente.");
        }
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  };

  return (
    <div className="login">
      <h1></h1>
      <center>
        <h2>Inicio de Sesión</h2>
      </center>
      <center>
        <div className="login-form-container">
         <FaUser className="FaUser" ></FaUser>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={user.nombre}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />

            <center>
              <button type="submit">Enviar</button>
            </center>
          </form>
        </div>
      </center>
    </div>
  );
};

export default Login;
