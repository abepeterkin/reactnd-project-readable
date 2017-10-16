const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function fetchCategories () {
  const options = {
    method: 'GET',
    uri: `${SERVER_HOSTNAME}/categories`,
    headers: { 'Authorization': AUTHORIZATION },
    json: true
  }
  return rp(options)
}

export default fetchCategories