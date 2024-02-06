import { useState, useEffect } from "react";
import axios from "axios";

const useObtenerEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerEmpleados = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/empleados");
        setEmpleados(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    obtenerEmpleados();
  }, []);

  return { empleados, loading, error };
};

export default useObtenerEmpleados;
