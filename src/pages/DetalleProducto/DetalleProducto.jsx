import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../api/productos';
import './DetalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await productos.findOne(id);
      setProducto(data);
    };
    fetchProduct();
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="detalle-producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <button>Agregar al Carrito</button>
    </div>
  );
};

export default DetalleProducto;