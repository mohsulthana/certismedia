// axios
import axios from 'axios'

// const baseURL = "http://localhost:8080/"
const baseURL = "https://api.certismedia.com/"

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
})

export default instance