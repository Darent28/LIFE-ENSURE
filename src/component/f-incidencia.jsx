import React, { useState } from "react";
import "./f-incidencia.css";
import { FaExclamationTriangle } from "react-icons/fa";

const Incidencia = () => {
  const [formData, setFormData] = useState({
    fecha: new Date().toISOString().slice(0, 10),
    hora: new Date().toLocaleTimeString(),
    tipoAccidente: "",
    causa: "",
    tipoVialidad: "",
    nombreVialidad: "",
    cruce: "",
    sentido: "",
    colonia: "",
    municipio: "",
    longitud: 0,
    latitud: 0,
    idVehiculo: 0,
    idUsuario: 0,
    lesionados: 0,
    muertos: 0,
    situacionClimatica: "",
    situacionPavimento: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData({
            ...formData,
            latitud: latitude,
            longitud: longitude,
          });
        },
        (error) => {
          console.error("Error retrieving location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar la petición POST a la API con los datos del formulario
    fetch("http://localhost:5189/api/Accidente/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Insert successful:", data);
        // Realizar alguna acción después de un insert exitoso, como redirigir a otra página o mostrar un mensaje de éxito.
      })
      .catch((error) => {
        console.error("Error during insert:", error);
        // Mostrar un mensaje de error o realizar alguna acción para manejar el error.
      });
  };

  return (
    <div>
      <center>
        <h2 className="h2-incidencia">Incidencia</h2>
      </center>
      <center>
      <div className="incidencia-form-container">
      <center>
          <FaExclamationTriangle className="FaExclamationTriangle"></FaExclamationTriangle>
        </center>
        <form onSubmit={handleSubmit}>
            <div className="incidencia-form-content">
              <div>
                <label>Fecha:</label>
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Hora:</label>
                <input
                  type="time"
                  name="hora"
                  value={formData.hora}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Tipo de Accidente:</label>
                <select
                  name="tipoAccidente"
                  value={formData.tipoAccidente}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccione</option>
                  <option value="alcance">Alcance</option>
                  <option value="lateral">Lateral</option>
                  <option value="otro">Otro</option>
                  <option value="estrellamiento">Estrellamiento</option>
                  <option value="de reversa">De Reversa</option>
                  <option value="crucero">Crucero</option>
                  <option value="atropello">Atropello</option>
                  <option value="volcadura">Volcadura</option>
                  <option value="de frente">De Frente</option>
                </select>
              </div>

              <div>
                <label>Causa:</label>
                <select
                  name="causa"
                  value={formData.causa}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccione</option>
                  <option value="no guardo distancia">
                    No guardó distancia
                  </option>
                  <option value="invasión de carril">Invasión de carril</option>
                  <option value="no respeto señalamientos">
                    No respetó señalamientos
                  </option>
                  <option value="no respeto semaforo">
                    No respetó semáforo
                  </option>
                  <option value="estado de alcoholismo">
                    Estado de alcoholismo
                  </option>
                  <option value="exceso de velocidad">
                    Exceso de velocidad
                  </option>
                  <option value="distracción">Distracción</option>
                  <option value="giro indebido">Giro indebido</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="incidencia-form-content">
              <div>
                <label>Tipo de Vialidad:</label>
                <select
                  name="tipoVialidad"
                  value={formData.tipoVialidad}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccione</option>
                  <option value="via de acceso controlado">
                    Vía de acceso controlado
                  </option>
                  <option value="zona de transito calmado">
                    Zona de tránsito calmado
                  </option>
                  <option value="via secundaria">Vía secundaria</option>
                  <option value="via primaria">Vía primaria</option>
                </select>
              </div>

              <div>
                <label>Nombre de la Vialidad:</label>
                <input
                  type="text"
                  name="nombreVialidad"
                  value={formData.nombreVialidad}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="incidencia-form-content">
              <div>
                <label>Cruce:</label>
                <input
                  type="text"
                  name="cruce"
                  value={formData.cruce}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Sentido:</label>
                <select
                  name="sentido"
                  value={formData.sentido}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccione</option>
                  <option value="oriente a poniente">Oriente a Poniente</option>
                  <option value="sur a norte">Sur a Norte</option>
                  <option value="norte a sur">Norte a Sur</option>
                  <option value="poniente a oriente">Poniente a Oriente</option>
                </select>
              </div>
            </div>

            <div className="incidencia-form-content">
              <div>
                <label>Colonia:</label>
                <input
                  type="text"
                  name="colonia"
                  value={formData.colonia}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Municipio:</label>
                <input
                  type="text"
                  name="municipio"
                  value={formData.municipio}
                  onChange={handleInputChange}
                />
              </div>

              {/* Ubicación Actual */}
              <div className="getCurrentLocation">
                <button type="button" onClick={getCurrentLocation}>
                  Ubicación Actual
                </button>
              </div>
            </div>

            <div className="incidencia-form-content">
              <div>
                <label>Id Vehiculo:</label>
                <input
                  type="number"
                  name="idVehiculo"
                  value={formData.idVehiculo}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Id Usuario:</label>
                <input
                  type="number"
                  name="idUsuario"
                  value={formData.idUsuario}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Lesionados:</label>
                <input
                  type="number"
                  name="lesionados"
                  value={formData.lesionados}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Muertos:</label>
                <input
                  type="number"
                  name="muertos"
                  value={formData.muertos}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="incidencia-form-content">
              <div>
                <label>Situación Climática:</label>
                <select
                  name="situacionClimatica"
                  value={formData.situacionClimatica}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccione</option>
                  <option value="granizo o nieve">Granizo o Nieve</option>
                  <option value="neblina">Neblina</option>
                  <option value="normal">Normal</option>
                  <option value="lluvia">Lluvia</option>
                  <option value="seco">Seco</option>
                </select>
              </div>

              <div>
                <label>Situación del Pavimento:</label>
                <select
                  name="situacionPavimento"
                  value={formData.situacionPavimento}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccione</option>
                  <option value="otro">Otro</option>
                  <option value="presencia de objetos">
                    Presencia de objetos
                  </option>
                  <option value="daño estructural">Daño estructural</option>
                  <option value="resbaloso">Resbaloso</option>
                  <option value="normal">Normal</option>
                </select>
              </div>
            </div>

            <button type="submit">Insertar</button>
        </form>
        </div>

      </center>
    </div>
  );
};

export default Incidencia;
