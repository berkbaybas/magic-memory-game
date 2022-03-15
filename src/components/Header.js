import styled from 'styled-components'
import { HeaderWrapper, StyledButton, StyledTitle } from './Header.style'

const StyledTurn = styled.span`
  color: white;
  font-size: 24px;
  margin-left: 8px;
`

function Header({ shuffleCards, resetTurn, turns }) {
  return (
    <HeaderWrapper>
      <StyledTitle>Magic Memory Game</StyledTitle>
      <div>
        <StyledButton
          onClick={() => {
            resetTurn()
            shuffleCards()
          }}
        >
          New Game
        </StyledButton>
        {turns > 0 ? <StyledTurn>Turn: {turns}</StyledTurn> : ''}
      </div>
    </HeaderWrapper>
  )
}

export default Header
