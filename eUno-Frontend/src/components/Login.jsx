import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import openEye from "../assets/img/eye-open.png";
import closedeye from "../assets/img/closed-eye.png";

const Login = () => {
  const [show, setShow] = useState(false);
  const {
    nombreUsuario,
    passwordUsuario,
    error,
    handleUsernameChange,
    handlePasswordChange,
    handleLogin,
  } = useLogin();

  const handleShow = () => {
    if (show) setShow(false);
    else setShow(true);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            className="username-input"
            placeholder="Nombre de usuario"
            value={nombreUsuario}
            onChange={handleUsernameChange}
          />
          <div className="pw">
            <input
              type={show ? "text" : "password"}
              className="password-input"
              placeholder="Contraseña"
              value={passwordUsuario}
              onChange={handlePasswordChange}
            />
            <button
              className={show ? "show-hide-button-2" : "show-hide-button"}
              type="button"
              onClick={handleShow}
            >
              {show ? (
                <img src={openEye} alt="" className="open-eye" />
              ) : (
                <img src={closedeye} alt="" className="open-eye" />
              )}
            </button>
          </div>

          <button className="login-button" type="submit">
            Iniciar sesión
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
