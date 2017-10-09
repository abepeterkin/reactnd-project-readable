const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function fetchComment (id) {
  return fetch(
    `${SERVER_HOSTNAME}/comments/${id}`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())
}

export default fetchComment