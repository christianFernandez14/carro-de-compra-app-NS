import styled from "@emotion/styled"

const Contenedor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  padding-left: 10px;
  border-bottom: 1px solid #b6b3b3;
  transition: all .3s ease-in-out;

  :hover{
    cursor: pointer;
  
  }
  
`

const Imagen = styled.img`
  width: 50px;
`

const ProductoCarro = ({ elem }) => {
  const {name, price, imagen, cantidad} = elem


  return (
    <Contenedor>
      <Imagen
      src={imagen}
      />
      <p>{name}</p>
      <p>cant: {cantidad}</p>
    </Contenedor>
  )
}

export default ProductoCarro