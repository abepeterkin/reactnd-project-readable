const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function deletePost (id) {
  const options = {
    method: 'DELETE',
    uri: `${SERVER_HOSTNAME}/posts/${id}`,
    headers: { 'Authorization': AUTHORIZATION },
    json: true
  }
  return rp(options)
}

export default deletePost