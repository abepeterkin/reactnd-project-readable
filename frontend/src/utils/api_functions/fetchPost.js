const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function fetchPost (id) {
  const options = {
    method: 'GET',
    uri: `${SERVER_HOSTNAME}/posts/${id}`,
    headers: { 'Authorization': AUTHORIZATION },
    json: true
  }
  return rp(options)
}

export default fetchPost