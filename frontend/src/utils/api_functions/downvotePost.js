const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function downvotePost (id) {
  return fetch(
    `${SERVER_HOSTNAME}/posts/${id}`,
    { 
      method: 'POST',
      headers: { 'Authorization': AUTHORIZATION },
      body: {
        option: 'downVote'
      }
    })
}

export default downvotePost