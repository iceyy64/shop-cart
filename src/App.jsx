import { Outlet } from "react-router-dom";
import { useState } from "react"; 
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';


function App (){
  const [cart, setCart] = useState([]);
  return(
    <>
    <Nav cart={cart} />
    <Outlet context={{ cart, setCart }} />
    <Footer />
    </>
  ) 
}

export default App;