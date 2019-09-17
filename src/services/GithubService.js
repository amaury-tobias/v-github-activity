'use strict'
import axios from 'axios'

export default {
  user: (login, token) => {
    return axios
      .get(`https://api.github.com/users/${login}`, {
        headers: {
          Authorization: `token ${token}`
        }
      })
      .then(response => response.data)
      .catch(e => e)
  },
  events: (login, token) => {
    return axios
      .get(`https://api.github.com/users/${login}/events`, {
        headers: {
          Authorization: `token ${token}`
        }
      })
      .then(response => response.data)
      .catch(e => e)
  }
}
