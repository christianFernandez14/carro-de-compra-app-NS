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
  const [carro, setCarro] = useState([])

  useEffect(() => {
    const cargandoProdutos = () => {
      setProductos(array)
    }
    cargandoProdutos()
  }, [])

  const agregarAlCarro = producto => {
    setCarro([
      ...carro,
      { ...producto, cantidad: 1 }
    ])
  }

  return (

    <div>
      <NavBar />
      <Layout>
        <Titulo />
        <Productos
          productos={productos}
          agregarAlCarro={agregarAlCarro}
        />
      </Layout>
    </div>

  )
}

export default App
