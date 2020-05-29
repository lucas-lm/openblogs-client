import axios from 'axios'

const { REACT_APP_API_URL: baseURL } = process.env

const api = axios.create({
  timeout: 2000,
  baseURL,
})

export default api
