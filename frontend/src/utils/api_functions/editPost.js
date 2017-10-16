const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function editPost (id, title, body) {
  const options = {
    method: 'PUT',
    uri: `${SERVER_HOSTNAME}/posts/${id}`,
    headers: { 'Authorization': AUTHORIZATION },
    body: {
      title,
      body,
    },
    json: true
  }
  return rp(options)
}

export default editPost
