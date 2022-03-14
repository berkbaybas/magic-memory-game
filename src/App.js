import { useState } from 'react'
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

  return (
    <MainContainer>
      <Header shuffleCards={shuffleCards} />
      <CardWrapper>
        {cards && cards.map((card) => <Card key={card.id} src={card.src} />)}
      </CardWrapper>
    </MainContainer>
  )
}

export default App
