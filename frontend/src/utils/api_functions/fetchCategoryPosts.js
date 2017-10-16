const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function fetchCategoryPosts (category) {
  const options = {
    method: 'GET',
    uri: `${SERVER_HOSTNAME}/${category}/posts`,
    headers: { 'Authorization': AUTHORIZATION },
    json: true
  }
  return rp(options)
}

export default fetchCategoryPosts
