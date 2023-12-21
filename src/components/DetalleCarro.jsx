import styled from "@emotion/styled"

import ProductoCarro from "./ProductoCarro"

const Contenedor = styled.div`
  width: 250px;
  position: absolute;
  right: 62px;
  margin-top: 30px;
  background-color: #fff;
  box-shadow: 1px 5px 10px rgb(0,0,0, .1);
  border-radius: 5px;

`
const DetalleCarro = ({ carro }) => {

  return (
    <Contenedor>
      <ul>
        {carro.map(elem => (
          <ProductoCarro
            key={elem.name}
            elem={elem}
          />
        ))}
      </ul>
    </Contenedor>
  )
}

export default DetalleCarro