import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";

function ActualizarEmpleado() {
  const { legajo } = useParams();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cargo, setCargo] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [antiguedad, setAntiguedad] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/empleados/${legajo}`)
      .then((response) => {
        const empleado = response.data;
        setNombre(empleado.nombreEmpleado);
        setApellido(empleado.apellidoEmpleado);
        setCargo(empleado.cargo);
        setSucursal(empleado.sucursal);
        setAntiguedad(empleado.antiguedadAnios);
      })
      .catch((error) => {
        console.error("Error al obtener datos del empleado:", error);
      });
  }, [legajo]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:8080/api/empleados/${legajo}`, {
        nombreEmpleado: nombre,
        apellidoEmpleado: apellido,
        cargo: cargo,
        sucursal: sucursal,
        antiguedadAnios: antiguedad,
      });
      navigate("/empleados");
      Swal.fire({
        title: "Excelente",
        text: "Empleado actualizado con éxito!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error al actualizar el empleado:", error);
    }
  };

  return (
    <div className="formulario">
      <h2>{`Actualizar Empleado nro ${legajo}`} </h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />
        <label>Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Apellido"
        />
        <label>Cargo:</label>
        <input
          type="text"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          placeholder="Cargo"
        />
        <label>Sucursal:</label>
        <input
          type="text"
          value={sucursal}
          onChange={(e) => setSucursal(e.target.value)}
          placeholder="Sucursal"
        />
        <label>Antiguedad:</label>
        <input
          type="number"
          value={antiguedad}
          onChange={(e) => setAntiguedad(e.target.value)}
          placeholder="Antigüedad"
        />
        <button type="submit">Actualizar Empleado</button>
      </form>
    </div>
  );
}

export default ActualizarEmpleado;
