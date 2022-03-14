import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const StyledTitle = styled.h1`
  color: white;
  font-size: 59px;
  margin-bottom: 16px;
`

export const StyledButton = styled.button`
  padding: 24px;
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
