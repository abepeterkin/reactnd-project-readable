const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function editComment (id, body) {
  const options = {
    method: 'PUT',
    uri: `${SERVER_HOSTNAME}/comments/${id}`,
    headers: { 'Authorization': AUTHORIZATION },
    body: {
      timestamp: Date.now(),
      body
    },
    json: true
  }
  return rp(options)
}

export default editComment