// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
  
  const {
    query: { search },
    method,
  } = req

  try {

    if (method !== 'GET') {    
      res.setHeader('Allow', ['GET'])
      return res.status(405).end(`Method ${method} Not Allowed`)
    }  
  
    const result = await axios.get(`https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_API_KEY}/${search}`)

    if (!result.data) {
      return res.status(200).send({ errorMessage: 'Wrong data' })  
    }
    
    res.status(200).json({ ...result.data })
        
  } catch (error) {
    res.status(500).send({ error: 'Error: failed to fetch data, please, try again later', message: error.toString })
  }
}
