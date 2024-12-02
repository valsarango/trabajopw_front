import React, { useState } from 'react';
import { create } from '../../api/usuarios';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await create({ email, password, nombre });
      console.log('Usuario registrado:', response);
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div className="signup">
      <h1>Registrarse</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Nombre Completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Signup;