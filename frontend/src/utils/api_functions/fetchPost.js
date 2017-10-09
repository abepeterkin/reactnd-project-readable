const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function fetchPost (id) {
  return fetch(
    `${SERVER_HOSTNAME}/posts/${id}`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())
}

export default fetchPost