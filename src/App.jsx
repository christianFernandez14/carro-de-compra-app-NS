import { useState, useEffect } from "react";

import NavBar from "./components/NavBar"
import Layout from "./components/Layout";
import Titulo from "./components/Titulo"
import Productos from "./components/Productos";

const array = [
  { name: 'Tomate', price: 1500, imagen: '../public/productos/tomate.jpg' },
  { name: 'Lechuga', price: 500, imagen: '../public/productos/lechuga.jpg' },
  { name: 'Arbejas', price: 2500, imagen: '../public/productos/arbejas.jpg' },

]
const App = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    const cargandoProdutos = () => {
      setProductos(array)
    }
    cargandoProdutos()
  }, [])

  return (

    <div>
      <NavBar />
      <Layout>
        <Titulo />
        <Productos
          productos={productos}
          agregarAlCarro={() => console.log('Agregando al carro')}
        />
      </Layout>
    </div>

  )
}

export default App
