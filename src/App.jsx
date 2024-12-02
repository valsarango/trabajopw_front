import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Productos from './pages/Productos/Productos.jsx';
import DetalleProducto from './pages/DetalleProducto/DetalleProducto.jsx';
import CarritoCompras from './pages/CarritoCompras/CarritoCompras.jsx';
import Login from './pages/Login/LogIn.jsx';
import Signup from './pages/Signup/SignUp.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Productos />} />
        <Route path="/products/:id" element={<DetalleProducto />} />
        <Route path="/cart" element={<CarritoCompras />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;