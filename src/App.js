import { useEffect, useState } from 'react'
import Card from './components/Card'

import { CardWrapper } from './styles/Card.styles'
import Header from './components/Header'
import MainContainer from './styles/MainContainer.styles'

import data from './utils/data.json'

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [win, setWin] = useState(false)

  const shuffleCards = () => {
    const shuffledCards = [...data.cardImages, ...data.cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        ...card,
        id: index + 1
      }))

    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (clickedCard) => {
    const flippedCardCount = cards.reduce((cur, card) => {
      return card.flipped === true ? cur + 1 : cur
    }, 0)

    if (flippedCardCount >= 2) {
      // reset flipped
      setCards((prevCards) => {
        return prevCards.map((card) => ({ ...card, flipped: false }))
      })
    }

    if (choiceOne) {
      setChoiceTwo(clickedCard)
    } else {
      setChoiceOne(clickedCard)
    }

    // flip clicked one
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === clickedCard.id) {
          return { ...card, flipped: true }
        } else {
          return card
        }
      })
    })
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        // match
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })

        resetTurn()
      } else {
        // dont match
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  useEffect(() => {
    if (cards.length === 0) {
      return
    }

    const unMatchingCard = cards.filter((card) => card.matched === false)
    if (unMatchingCard.length === 0) {
      // win game
      localStorage.setItem('highestScore', turns.toString())
      setWin(true)
    }
  }, [cards, turns])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevState) => prevState + 1)
  }

  return (
    <MainContainer>
      <Header
        shuffleCards={shuffleCards}
        resetTurn={resetTurn}
        turns={turns}
        gameStatus={win}
        setGameStatus={setWin}
      />
      <CardWrapper>
        {cards &&
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card.flipped}
            />
          ))}
      </CardWrapper>
    </MainContainer>
  )
}

export default App
