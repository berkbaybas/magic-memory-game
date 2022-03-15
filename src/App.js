import { useEffect, useState } from 'react'
import Card from './components/Card'

import { CardWrapper } from './components/Card.styles'
import Header from './components/Header'
import MainContainer from './styles/MainContainer.styles'

const cardImages = [
  { src: '/img/harrypotter.jpg' },
  { src: '/img/albusdumbledore.jpg' },
  { src: '/img/dracomalfoy.jpg' },
  { src: '/img/hermionegranger.jpg' },
  { src: '/img/lordwoldemort.jpg' },
  { src: '/img/ronweasley.jpg' },
  { src: '/img/rubeushagrid.jpg' },
  { src: '/img/severussnape.jpg' }
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

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log('match')
        resetTurn()
      } else {
        console.log("don't match")
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

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
            <Card key={card.id} card={card} handleChoice={handleChoice} />
          ))}
      </CardWrapper>
    </MainContainer>
  )
}

export default App
