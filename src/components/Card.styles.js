import styled from 'styled-components'

export const CardWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 16px;
  margin: 0 auto;
  width: 80%;
`

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid white;
  padding: 8px;
`
export const CardImage = styled.img`
  border-radius: 4px;
  height: 100%;
  width: 50%;
`
