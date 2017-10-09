const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function editPost (id, title, body) {
  return fetch(
    `${SERVER_HOSTNAME}/posts/${id}`,
    { 
      method: 'PUT',
      headers: { 'Authorization': AUTHORIZATION },
      body: {
        title,
        body,
      }
    })
}

export default editPost