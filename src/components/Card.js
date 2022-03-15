import { CardImage, StyledCard } from './Card.styles'

function Card({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <StyledCard>
      <CardImage src={card.src} alt="card-front" />
      <CardImage
        src="/img/back-image.png"
        onClick={handleClick}
        alt="card-back"
      />
    </StyledCard>
  )
}

export default Card
