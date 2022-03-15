import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  HeaderWrapper,
  StyledButton,
  StyledTitle,
  StyledSmallTitle
} from './Header.style'

const StyledTurn = styled.span`
  color: white;
  font-size: 24px;
  margin-left: 8px;
`

function Header({ shuffleCards, resetTurn, turns, gameStatus, setGameStatus }) {
  const [highestScore, setHighestScore] = useState(0)

  useEffect(() => {
    setHighestScore(Number(localStorage.getItem('highestScore')))
  }, [])

  useEffect(() => {
    console.log('highestScore', highestScore)
  }, [highestScore])

  return (
    <HeaderWrapper>
      {!gameStatus && <StyledTitle>Magic Memory Game</StyledTitle>}

      {highestScore !== 0 ? (
        <StyledSmallTitle>Best Score: {highestScore}</StyledSmallTitle>
      ) : (
        ''
      )}

      {gameStatus && <StyledTitle>Congratulations you win</StyledTitle>}
      <div>
        <StyledButton
          onClick={() => {
            setGameStatus(false)
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
