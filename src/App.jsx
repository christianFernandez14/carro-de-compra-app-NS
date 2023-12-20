import { useState, useEffect } from "react";

const array = [
  {name:'Tomate', price: 1500, imagen:'../public/productos/tomate.jpg'},
  {name:'Lechuga', price: 500, imagen:'../public/productos/lechuga.jpg'},
  {name:'Arbejas', price: 2500, imagen:'../public/productos/arbejas.jpg'},

]
const App = () => {

  const [productos, setProductos] = useState([])

  useEffect(()=>{
    const cargandoProdutos = ()=> {
      setProductos(array)
    }
    cargandoProdutos()
  },[])

  return (
    <>
      <h1>Carrito de compras</h1>
    </>
  )
}

export default App
