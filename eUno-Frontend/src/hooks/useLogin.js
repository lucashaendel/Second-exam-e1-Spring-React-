import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const useLogin = () => {
  const navigate = useNavigate();
  const bool = localStorage.getItem("isLoggedIn");
  const [nombreUsuario, setnombreUsuario] = useState("");
  const [passwordUsuario, setPasswordUsuario] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(bool);

  const handleUsernameChange = (event) => {
    setnombreUsuario(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordUsuario(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          nombreUsuario,
          passwordUsuario,
        }
      );

      if (response.status === 200) {
        setIsLoggedIn(true);
        setError(null);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("nombreUsuario", nombreUsuario);
        navigate("/empleados");
        Swal.fire({
          title: "Bienvenido",
          text: "Usuario logueado con exito",
          icon: "success",
        });
      } else {
        setError("Error al iniciar sesión");
      }
    } catch (error) {
      setError("Error al iniciar sesión");
      Swal.fire({
        title: "Atencion",
        text: "Ingresaste un usuario o contraseña incorrectos",
        icon: "error",
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate("/");
    Swal.fire({
      title: "Adios!",
      text: "Te esperamos la proxima vez",
      icon: "danger",
    });
  };

  return {
    nombreUsuario,
    passwordUsuario,
    isLoggedIn,
    error,
    handleUsernameChange,
    handlePasswordChange,
    handleLogin,
    handleLogout,
  };
};

export default useLogin;
