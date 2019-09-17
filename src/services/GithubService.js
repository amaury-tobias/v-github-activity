'use strict'
import axios from 'axios'

export default {
  user: (login, token) => {
    let headers
    if (token) headers = { Authorization: `token ${token}` }

    return axios
      .get(`https://api.github.com/users/${login}`, { headers })
      .then(response => response.data)
      .catch(e => e)
  },
  events: (login, token) => {
    let headers
    if (token) headers = { Authorization: `token ${token}` }
    return axios
      .get(`https://api.github.com/users/${login}/events`, { headers })
      .then(response => response.data)
      .catch(e => e)
  }
}
