'use strict'

export default {
  user: login => {
    return fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(response => response)
      .catch(e => e)
  },
  events: login => {
    return fetch(`https://api.github.com/users/${login}/events`)
      .then(res => res.json())
      .then(response => response)
      .catch(e => e)
  }
}
