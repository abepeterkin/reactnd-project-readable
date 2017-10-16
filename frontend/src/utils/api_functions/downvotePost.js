const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function downvotePost (id) {
  const options = {
    method: 'POST',
    uri: `${SERVER_HOSTNAME}/posts/${id}`,
    headers: { 'Authorization': AUTHORIZATION },
    body: {
      option: 'downVote'
    },
    json: true
  }
  return rp(options)
}

export default downvotePost