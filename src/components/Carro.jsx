import styled from "@emotion/styled"

import BubbleAlert from './BubbleAlert'

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
const Carro = () => {
  return (
    <div>
      <Bubble>
        <BubbleAlert />
      </Bubble>
      <Button>
        Carro
      </Button>
    </div>
  )
}

export default Carro