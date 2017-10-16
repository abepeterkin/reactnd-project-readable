const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function fetchAllPosts () {
  const options = {
    method: 'GET',
    uri: `${SERVER_HOSTNAME}/posts`,
    headers: { 'Authorization': AUTHORIZATION },
    json: true
  }
  return rp(options)
}

export default fetchAllPosts