const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function downvoteComment (id) {
  const options = {
    method: 'POST',
    uri: `${SERVER_HOSTNAME}/comments/${id}`,
    headers: { 'Authorization': AUTHORIZATION },
    body: {
      option: 'downVote'
    },
    json: true
  }
  return rp(options)
}

export default downvoteComment