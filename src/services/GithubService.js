'use strict'
import axios from 'axios'
axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default {
  user: (login, token) => {
    let headers
    if (token) headers = { Authorization: `token ${token}` }

    return axios.get(`https://api.github.com/users/${login}`, { headers })
  },
  events: (login, token) => {
    let headers
    if (token) headers = { Authorization: `token ${token}` }
    return axios.get(`https://api.github.com/users/${login}/events`, {
      headers
    })
  }
}
