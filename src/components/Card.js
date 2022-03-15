import { CardImage, StyledCard } from './Card.styles'

function Card({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <StyledCard>
      {flipped || card.matched ? (
        <CardImage src={card.src} alt="card-front" />
      ) : (
        <CardImage
          src="/img/back-image.png"
          onClick={handleClick}
          alt="card-back"
        />
      )}
    </StyledCard>
  )
}

export default Card
