import styled from "@emotion/styled"

const Container = styled.div`
  background-color: #fff;
  color: #0a283e;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContainerSecond = styled.div`
  width: 1200px;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <ContainerSecond>
        {children}
      </ContainerSecond>
    </Container>
  )
}

export default Layout