import axios from 'axios';


const instance = axios.create ({
 baseURL:'https://uifaces.co/api',
 headers: {
    'X-API-KEY': process.env.REACT_APP_API_KEY,
    'Accept': 'application/json',
    'Cache-Control': 'no-cache'
  } 
})

export default instance;