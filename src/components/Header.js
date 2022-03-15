import { HeaderWrapper, StyledButton, StyledTitle } from './Header.style'

function Header({ shuffleCards, resetTurn }) {
  return (
    <HeaderWrapper>
      <StyledTitle>Magic Memory Game</StyledTitle>
      <StyledButton
        onClick={() => {
          resetTurn()
          shuffleCards()
        }}
      >
        New Game
      </StyledButton>
    </HeaderWrapper>
  )
}

export default Header
