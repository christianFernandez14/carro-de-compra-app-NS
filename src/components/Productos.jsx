import styled from '@emotion/styled'

import Producto from "./Producto"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Productos = ({ productos, agregarAlCarro }) => {
  return (
    <Container>
      {productos.map(producto => (
        <Producto
          key={producto.name}
          producto={producto}
          agregarAlCarro={agregarAlCarro}
        />
      ))}
    </Container>
  )
}

export default Productos