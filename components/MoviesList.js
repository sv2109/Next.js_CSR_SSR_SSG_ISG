import { Row, Col, Alert } from 'react-bootstrap';

import MovieCard from './MovieCard'

const MoviesList = ({movies}) => {
  return movies.length ? (
    <Row xs={1} md={2} lg={4} className="g-4">
      { movies.map(movie => (
        <Col key={movie.id}>
          <MovieCard movie={movie}/>
        </Col>
      ))}
    </Row>
  ) : (
    <Alert variant="info">Nothing found</Alert>          
  )
}

export default MoviesList
