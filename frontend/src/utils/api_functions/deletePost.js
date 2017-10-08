const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function deletePost (id) {
  return fetch(
    `${SERVER_HOSTNAME}/posts/${id}`,
    { 
      method: 'DELETE',
      headers: { 'Authorization': AUTHORIZATION }
    })
}

export default deletePost