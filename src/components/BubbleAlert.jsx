import styled from "@emotion/styled"

const BubbleCustom = styled.span`
  background-color: #e9725a;
  border-radius: 15px;
  color: #fff;
  font-weight: bold;
  padding: 3px 10px;
  font-size: .9rem;
`

const BubbleAlert = ({ value }) => {

  const getNumber = n => {
    if (!n) return ''
    return n > 9 ? '9+' : n
  }

  return (
    <BubbleCustom>
      {getNumber(value)}
    </BubbleCustom>
  )
}

export default BubbleAlert