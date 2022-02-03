import { Card } from 'react-bootstrap';

const MovieCard = ({movie}) => {
  return (
    <Card>
    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      {movie.description && <Card.Text>{movie.description}</Card.Text>}
      {movie.year && <Card.Text>Year: {movie.year}</Card.Text>}
      {movie.releaseState && <Card.Text>Release Date: {movie.releaseState}</Card.Text>}
      {movie.rank && <Card.Text>Rank: {movie.rank}</Card.Text>}
      {movie.imDbRating && <Card.Text>IMDb Rating: {movie.imDbRating}</Card.Text>}
      {movie.crew && <Card.Text>Crew: {movie.crew}</Card.Text>}      
    </Card.Body>
  </Card>
  )
}

export default MovieCard
