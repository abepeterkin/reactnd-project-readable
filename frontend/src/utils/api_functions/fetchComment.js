const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function fetchComment (id) {
  const options = {
    method: 'GET',
    uri: `${SERVER_HOSTNAME}/comments/${id}`,
    headers: { 'Authorization': AUTHORIZATION },
    json: true
  }
  return rp(options)
}

export default fetchComment