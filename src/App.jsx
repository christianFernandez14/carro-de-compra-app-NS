import { useState, useEffect } from "react";

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
      <Productos
        productos={productos}
        agregarAlCarro={() => console.log('Agregando al carro')}
      />
    </div>
  )
}

export default App
