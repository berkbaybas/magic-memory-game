import { HeaderWrapper, StyledButton, StyledTitle } from './Header.style'

function Header({ shuffleCards }) {
  return (
    <HeaderWrapper>
      <StyledTitle>Magic Memory Game</StyledTitle>
      <StyledButton onClick={shuffleCards}>New Game</StyledButton>
    </HeaderWrapper>
  )
}

export default Header
