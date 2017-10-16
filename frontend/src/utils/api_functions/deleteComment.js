const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function deleteComment (id) {
  const options = {
    method: 'DELETE',
    uri: `${SERVER_HOSTNAME}/comments/${id}`,
    headers: { 'Authorization': AUTHORIZATION },
    json: true
  }
  return rp(options)
}

export default deleteComment