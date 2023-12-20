import Producto from "./Producto"

const Productos = ({ productos, agregarAlCarro }) => {
  return (
    <div>
      {productos.map(producto => (
        <Producto
          key={producto.name}
          producto={producto}
          agregarAlCarro={agregarAlCarro}
        />
      ))}
    </div>
  )
}

export default Productos