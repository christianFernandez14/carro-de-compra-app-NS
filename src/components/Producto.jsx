
const Producto = ({ producto, agregarAlCarro }) => {

  const { name, price, imagen } = producto
  return (
    <div>
      <img
        src={`${imagen}`}
        alt={`imagen del ${name}`}
      />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}

export default Producto