import styled from '@emotion/styled'

const Container = styled.div`
  border: solid 1px #eee;
  box-shadow: 0 5px 5px rgb(0, 0, 0, .1);
  width: 30%;
  padding: 10px 15px;
  border-radius: 10px;

`
const Img = styled.img`
  width: 100%;
`
const H2 = styled.h2`

`
const P = styled.p`

`

const Producto = ({ producto, agregarAlCarro }) => {

  const { name, price, imagen } = producto
  return (
    <Container>
      <Img
        src={`${imagen}`}
        alt={`imagen del ${name}`}
      />
      <H2>{name}</H2>
      <P>{price}</P>
    </Container>
  )
}

export default Producto