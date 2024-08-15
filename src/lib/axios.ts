import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://appostila-server.onrender.com',
})
