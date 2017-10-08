const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function downvoteComment (id) {
  return fetch(
    `${SERVER_HOSTNAME}/comments/${id}`,
    { 
      method: 'POST',
      headers: { 'Authorization': AUTHORIZATION },
      body: {
        option: 'downVote'
      }
    })
}

export default downvoteComment