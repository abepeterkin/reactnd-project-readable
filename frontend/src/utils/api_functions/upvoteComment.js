const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function upvoteComment (id) {
  return fetch(
    `${SERVER_HOSTNAME}/comments/${id}`,
    { 
      method: 'POST',
      headers: { 'Authorization': AUTHORIZATION },
      body: {
        option: 'upVote'
      }
    }).then((res) => res.json())
}

export default upvoteComment