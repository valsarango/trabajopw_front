// CarritoCompras.jsx
import React, { useEffect, useState } from 'react';
import carritoCompras from '../../api/carritoCompras';
import './CarritoCompras.css';

const CarritoCompras = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const fetchCarrito = async () => {
      const data = await carritoCompras.findAll();
      setCarrito(data);
    };
    fetchCarrito();
  }, []);

  return (
    <div className="carrito-compras">
      <h1>Mi Carrito</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="carrito-items">
          {carrito.map((item) => (
            <div key={item.id} className="carrito-item">
              <img src={item.imagen} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarritoCompras;