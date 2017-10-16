const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function upvotePost (id) {
  const options = {
    method: 'POST',
    uri: `${SERVER_HOSTNAME}/posts/${id}`,
    headers: { 'Authorization': AUTHORIZATION },
    body: {
        option: 'upVote'
    },
    json: true
  }
  return rp(options)
}

export default upvotePost