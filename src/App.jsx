import { useState, useEffect } from "react";

import NavBar from "./components/NavBar"
import Layout from "./components/Layout";
import Titulo from "./components/Titulo"
import Productos from "./components/Productos";

const array = [
  { name: 'Tomate', price: 1500, imagen: '/productos/tomate.jpg' },
  { name: 'Lechuga', price: 500, imagen: '/productos/lechuga.jpg' },
  { name: 'Arbejas', price: 2500, imagen: '/productos/arbejas.jpg' },

]
const App = () => {

  const [productos, setProductos] = useState([])
  const [carro, setCarro] = useState([])
  const [carroVisible, setCarroVisible] = useState(false)

  useEffect(() => {
    const cargandoProdutos = () => {
      setProductos(array)
    }
    cargandoProdutos()
  }, [])

  const agregarAlCarro = producto => {

    const productoExistente = carro.find(elem => elem.name === producto.name)

    if (productoExistente) {
      // Si existe el elemento aumento la cantidad del producto en state
      const newCarro = carro.map(elem => (
        elem.name === producto.name
          ? ({ ...elem, cantidad: elem.cantidad + 1 })
          : elem
      ))
      setCarro(newCarro)

    } else {
      // Si no existe lo agrego al state
      setCarro([
        ...carro,
        { ...producto, cantidad: 1 }
      ])
    }
  }

  const mostrarCarro = () => {
    setCarroVisible(!carroVisible)
  }
  return (

    <div>
      <NavBar
        carro={carro}
        carroVisible={carroVisible}
        mostrarCarro={mostrarCarro}
      />
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
