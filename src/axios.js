// axios
import axios from 'axios'

const baseURL = "http://localhost:8080/"
// const baseURL = "http://certis-api.fishstock.id/"

export default axios.create({
  baseURL: baseURL
  // You can add your headers here
})
