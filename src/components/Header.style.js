import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  padding-top: 16px;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const StyledTitle = styled.h1`
  color: white;
  font-size: 59px;
  margin-bottom: 32px;
`

export const StyledSmallTitle = styled.h3`
  color: white;
  font-size: 24px;
  margin-bottom: 16px;
`

export const StyledButton = styled.button`
  padding: 16px;
  width: 128px;
  font-weight: bold;
  background-color: white;
  border: 1px solid white;
  cursor: pointer;
  transition: 0.45s;

  &:hover {
    background-color: #6f1e38;
    color: white;
  }
`
