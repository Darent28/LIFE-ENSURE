import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import './f-auto.css'

const CarForm = () => {
  const [carType, setCarType] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [carValue, setCarValue] = useState("");
  const [deductible, setDeductible] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      carType === "" ||
      carBrand === "" ||
      carModel === "" ||
      licensePlate === "" ||
      carValue === "" ||
      deductible === "" ||
      userId === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const carData = {
      id: 0,
      placas: licensePlate,
      modelo: parseInt(carModel),
      valorDeducible: parseInt(deductible),
      idUsuario: parseInt(userId)
    };

    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carData),
    };

    fetch("http://localhost:5189/api/Carro/create", requestInit)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // Realiza acciones adicionales aquí para manejar la respuesta de la API
        // Limpiar los campos del formulario después de enviarlos
        setCarType("");
        setCarBrand("");
        setCarModel("");
        setLicensePlate("");
        setCarValue("");
        setDeductible("");
        setUserId("");
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  };

  return (
    <div>
      <h1></h1>
      <center>
        <h2>Registro de Automóvil</h2>
      </center>

      <form className="form-container" onSubmit={handleSubmit}>
        <center>
          <FaCar className="FaCar" />
        </center>
        <div className="f-auto-content">
          <label>
            Tipo de vehículo:
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
            >
              <option value="">--Selecciona un tipo--</option>
              <option value="Sedán">Sedán</option>
              <option value="SUV">SUV</option>
              <option value="Camioneta">Camioneta</option>
              <option value="Hatchback">Hatchback</option>
            </select>
          </label>
        </div>
        <div className="f-auto-content">
          <label>
            Marca:
            <select
              className="width-268"
              value={carBrand}
              onChange={(e) => setCarBrand(e.target.value)}
            >
              <option value="">--Selecciona una marca--</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Kia">Kia</option>
              <option value="Subaru">Subaru</option>
            </select>
          </label>

          <label>
            Modelo:
            <input
              type="text"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
            />
          </label>
          <label>
            Placas:
            <input
              type="text"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
            />
          </label>
        </div>

        <div className="f-auto-content">
          <label>
            Valor:
            <input
              type="text"
              value={carValue}
              onChange={(e) => setCarValue(e.target.value)}
            />
          </label>

          <label>
            Deducible:
            <input
              type="text"
              value={deductible}
              onChange={(e) => setDeductible(e.target.value)}
            />
          </label>
        </div>
        <div className="f-auto-content">
          <label>
            ID de usuario:
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </label>

          <button className="margin-left-14" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
