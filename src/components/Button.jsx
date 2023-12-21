import styled from '@emotion/styled'

const ButtonCustom = styled.button`
  margin-top: 10px;
  background-color: #0a283e;
  color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;


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