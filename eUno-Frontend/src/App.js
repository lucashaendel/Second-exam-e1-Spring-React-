import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ListadoEmpleados from "./components/ListadoEmpleados";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import NuevoEmpleado from "./components/NuevoEmpleado";
import ActualizarEmpleado from "./components/ActualizarEmpleado";
import useObtenerEmpleados from "./hooks/useObtenerEmpleados";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userName = localStorage.getItem("nombreUsuario");

  return (
    <AuthProvider>
      <Navbar userName={userName} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn || userName ? (
                <Navigate to="/empleados" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/empleados" element={<PrivateRoute />} />
          <Route path="/nuevo-empleado" Component={NuevoEmpleado} />
          <Route
            path="/actualizar-empleado/:legajo"
            Component={ActualizarEmpleado}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
function PrivateRoute() {
  const { isLoggedIn } = useAuth();
  const { empleados } = useObtenerEmpleados();

  return isLoggedIn ? (
    <ListadoEmpleados title={"Listado de Empleados"} />
  ) : (
    <Navigate to="/login" />
  );
}
export default App;
