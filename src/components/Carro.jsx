import styled from "@emotion/styled"

import BubbleAlert from './BubbleAlert'
import DetalleCarro from "./DetalleCarro";


const Button = styled.button`
  background-color: #359a2c;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1.5px;
  border: none;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
`
const Bubble = styled.span`
  position: relative;
  left: 12px;
  top: 22px;
`
const Carro = ({ carro }) => {

  const cantidad = carro.reduce((acc, elem) => acc + elem.cantidad, 0)

  return (
    <div>
      <Bubble>
        {cantidad != 0
          && <BubbleAlert value={cantidad} />
        }
      </Bubble>
      <Button>
        Carro
      </Button>
      <DetalleCarro
        carro={carro}
      />
    </div>
  )
}

export default Carro