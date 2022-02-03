import {useState} from 'react'
import Head from 'next/head'
import { InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';

import axios from 'axios'

import MoviesList from '../components/MoviesList'

export default function Home() {

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState()
  const [error, setError] = useState('')

  const showAlert = text => {
    setError(text.toString())
    setTimeout(() => setError('') , 5000)
  }

  const fetchMovies = async () => {

    if (!search.length) {
      if (movies) setMovies()
      return
    }

    setLoading(true)
    setMovies()
    
    const result = await axios.get('/api/movies?search=' + search)
      .catch( error => {
        showAlert(error.response?.data?.error || error.response?.data?.message || error.toString())
      })
    
    if (result?.data?.errorMessage.length) {
      showAlert(result.data?.errorMessage)
    }

    if (result?.data?.results) {
      setMovies(result.data.results)
    }
  
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Search movies</title>
      </Head>

      <div className="mx-auto w-75 my-3" >
        <h1>Search movies</h1>
        <InputGroup size="lg" className="mb-3">
          <FormControl
            placeholder={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => (e.code === "Enter" || e.code === "NumpadEnter") && fetchMovies()}
          />
          <Button variant="outline-secondary" id="search" onClick={fetchMovies} disabled={loading}>
            { loading && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-1"
              />
            )}          
            Search
          </Button>
        </InputGroup>

        { error && (
          <Alert variant="danger" onClose={() => setError('')} dismissible>
            { error }
          </Alert>          
        )}

      </div>      

      { movies && (<MoviesList movies={movies} />)}

    </>
  )
}