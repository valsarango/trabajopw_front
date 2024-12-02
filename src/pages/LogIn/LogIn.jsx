import React, { useState } from 'react';
import { login } from '../../api/usuarios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      console.log('Usuario logueado:', response);
    } catch (error) {
      console.error('Error en el login:', error);
    }
  };

  return (
    <div className="login">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;