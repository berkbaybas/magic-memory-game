import { useEffect, useState } from 'react'
import Card from './components/Card'

import { CardWrapper } from './components/Card.styles'
import Header from './components/Header'
import MainContainer from './styles/MainContainer.styles'

const cardImages = [
  { src: '/img/harrypotter.jpg', matched: false, flipped: false },
  { src: '/img/albusdumbledore.jpg', matched: false, flipped: false },
  { src: '/img/dracomalfoy.jpg', matched: false, flipped: false },
  { src: '/img/hermionegranger.jpg', matched: false, flipped: false },
  { src: '/img/lordwoldemort.jpg', matched: false, flipped: false },
  { src: '/img/ronweasley.jpg', matched: false, flipped: false },
  { src: '/img/rubeushagrid.jpg', matched: false, flipped: false },
  { src: '/img/severussnape.jpg', matched: false, flipped: false }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
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

    console.log(flippedCardCount)

    if (flippedCardCount >= 2) {
      setCards((prevCards) => {
        return prevCards.map((card) => ({ ...card, flipped: false }))
      })
    }

    if (choiceOne) {
      setChoiceTwo(clickedCard)
    } else {
      setChoiceOne(clickedCard)
    }
    setCards((prevCards) => {
      return prevCards.map((c) => {
        if (c.id === clickedCard.id) {
          console.log(c)
          return { ...c, flipped: true }
        } else {
          return c
        }
      })
    })
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
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
        console.log("don't match")
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevState) => prevState + 1)
  }

  return (
    <MainContainer>
      <Header shuffleCards={shuffleCards} resetTurn={resetTurn} />
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
