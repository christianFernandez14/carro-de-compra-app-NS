import styled from '@emotion/styled'

const ButtonCustom = styled.button`
 position: absolute;
  right: 10px;
  bottom: 10px;
  margin-top: 10px;
  background-color: #0a283e;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
`
const Button = ({ children, onClick }) => {
  return (
    <ButtonCustom
      onClick={onClick}
    >
      {children}
    </ButtonCustom>
  )
}

export default Button