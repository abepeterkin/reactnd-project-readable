const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function deleteComment (id) {
  return fetch(
    `${SERVER_HOSTNAME}/comments/${id}`,
    { 
      method: 'DELETE',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())
}

export default deleteComment