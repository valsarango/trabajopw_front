// Productos.jsx
import React, { useEffect, useState } from 'react';
import productos from '../../api/productos';
import TarjetaProducto from '../../components/TarjetaProducto/TarjetaProducto';

import './Productos.css';

const Productos = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productos.findAll();
      setProductList(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="productos">
      <h1>Catálogo de Productos</h1>
      <div className="products-container">
        {productList.map((producto) => (
          <TarjetaProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Productos;