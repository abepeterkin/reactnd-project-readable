const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function fetchPostComments (id) {
  return fetch(
    `${SERVER_HOSTNAME}/posts/${id}/comments`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())
}

export default fetchPostComments