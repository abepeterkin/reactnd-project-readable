const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function editComment (id, body) {
  return fetch(
    `${SERVER_HOSTNAME}/comments/${id}`,
    { 
      method: 'PUT',
      headers: { 'Authorization': AUTHORIZATION },
      body: {
        timestamp: Date.now(),
        body
      }
    }).then((res) => res.json())
}

export default editComment