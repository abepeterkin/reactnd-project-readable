const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function deleteComment (id) {
  return fetch(
    `${SERVER_HOSTNAME}/comments/${id}`,
    { 
      method: 'DELETE',
      headers: { 'Authorization': AUTHORIZATION }
    })
}

export default deleteComment