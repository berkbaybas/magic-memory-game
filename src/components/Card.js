import { CardImage, StyledCard } from './Card.styles'

function Card({ src }) {
  return (
    <StyledCard>
      <CardImage src={src} alt="card-front" />
      <CardImage src="/img/back-image.png" alt="card-back" />
    </StyledCard>
  )
}

export default Card
