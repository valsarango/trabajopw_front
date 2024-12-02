import React from 'react';
import './TarjetaProducto.css';

const TarjetaProducto = ({ producto }) => {
  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <button>Ver Detalles</button>
    </div>
  );
};

export default TarjetaProducto;