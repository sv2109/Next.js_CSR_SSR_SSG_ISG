import { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { Alert } from 'react-bootstrap'
import MoviesList from '../components/MoviesList'

const Best = ({data}) => {

  const [error, setError] = useState('')

  const movies = data?.items?.slice(0,20)

  useEffect(() => {
    if (data.errorMessage?.length) {
      setError(data.errorMessage)
    }
  }, [data.errorMessage])

  return (
    <>
     <Head>
        <title>The best 20 movies from the best 250</title>
      </Head>

      <h1>The best 20 movies from the best 250</h1>

      { error && (<Alert variant="danger">{ error }</Alert>) }

      { movies && (<MoviesList movies={movies} />)} 
    </>
  )
}

export async function getStaticProps() {

  let data = {}

  const result = await axios.get(`https://imdb-api.com/en/API/Top250Movies/${process.env.IMDB_API_KEY}`)
    .catch( error => {
      data.errorMessage = "Error fetching data. Please, try again later"    
    })

  if(result?.data) {
    data = result.data
  }      
    
  return { props: { data } };
}


export default Best
