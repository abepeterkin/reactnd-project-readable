const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function fetchPostComments (id) {
  const options = {
    method: 'GET',
    uri: `${SERVER_HOSTNAME}/posts/${id}/comments`,
    headers: { 'Authorization': AUTHORIZATION },
    json: true
  }
  return rp(options)
}

export default fetchPostComments