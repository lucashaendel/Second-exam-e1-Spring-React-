import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function NuevoEmpleado() {
  const navigate = useNavigate();
  const [legajo, setLegajo] = useState();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cargo, setCargo] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [antiguedad, setAntiguedad] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/empleados", {
        legajo: legajo,
        nombreEmpleado: nombre,
        apellidoEmpleado: apellido,
        cargo: cargo,
        sucursal: sucursal,
        antiguedadAnios: antiguedad,
      });
      if (response.status === 201) {
        navigate("/empleados");
        Swal.fire({
          title: "Excelente",
          text: "Empleado creado con exito!",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error al guardar el empleado", error);
    }
  };

  return (
    <div>
      <div className="formulario">
        <h2>Nuevo Empleado</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={legajo}
            onChange={(e) => setLegajo(e.target.value)}
            placeholder="Legajo"
            required
          />
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            required
          />
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Apellido"
            required
          />
          <input
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            placeholder="Cargo"
            required
          />
          <input
            type="text"
            value={sucursal}
            onChange={(e) => setSucursal(e.target.value)}
            placeholder="Sucursal"
            required
          />
          <input
            type="number"
            value={antiguedad}
            onChange={(e) => setAntiguedad(e.target.value)}
            placeholder="Antiguedad"
            required
          />
          <button type="submit">Guardar Empleado</button>
        </form>
      </div>
    </div>
  );
}

export default NuevoEmpleado;
