import React, { useEffect, useState } from 'react';
import productos from '../../api/productos';
import TarjetaProducto from '../../components/TarjetaProducto/TarjetaProducto';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await productos.findAll();
      setFeaturedProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Bienvenidos a FunkoSpace</h1>
      <div className="products-container">
        {featuredProducts.map((producto) => (
          <TarjetaProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Home;