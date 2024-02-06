import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ListadoEmpleados({ title }) {
  const [empleados, setEmpleados] = useState([]);
  const navigate = useNavigate();
  // console.log(listaEmpleados);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/empleados")
      .then((response) => {
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.error("Error fetching empleados", error);
      });
  }, []);

  const handleDelete = (legajo) => {
    fetch(`http://localhost:8080/api/empleados/${legajo}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setEmpleados(
            empleados.filter((empleado) => empleado.legajo !== legajo)
          );
        } else {
          console.error("Error al eliminar empleado");
        }
      })
      .catch((error) => console.error("Error al eliminar empleado", error));
  };

  const handleUpdate = (legajo) => {
    navigate(`/actualizar-empleado/${legajo}`);
  };

  return (
    <div className="listado-empleados-container">
      <div className="listado-empleados-header">
        <h1>{title}</h1>
        {empleados.length > 0 ? (
          <table className="listado-empleados-table">
            <thead>
              <tr>
                <th>Nro. Legajo</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cargo</th>
                <th>Sucursal</th>
                <th>Antigüedad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado) => (
                <tr key={empleado.legajo}>
                  <td>{empleado.legajo}</td>
                  <td>{empleado.nombreEmpleado}</td>
                  <td>{empleado.apellidoEmpleado}</td>
                  <td>{empleado.cargo}</td>
                  <td>{empleado.sucursal}</td>
                  <td>
                    {empleado.antiguedadAnios > 1
                      ? `${empleado.antiguedadAnios} años`
                      : `${empleado.antiguedadAnios} año`}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(empleado.legajo)}
                      className="btn-delete"
                    >
                      🗑️ Delete
                    </button>
                    <button
                      onClick={() => handleUpdate(empleado.legajo)}
                      className="btn-update"
                    >
                      🖉 Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3>Todavia no se encuentran datos en la lista</h3>
        )}
      </div>
      <a href="/nuevo-empleado" className="agregar-empleado-button">
        <button className="btn-add">Agregar un empleado</button>
      </a>
    </div>
  );
}

export default ListadoEmpleados;
