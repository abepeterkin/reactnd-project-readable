const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function upvotePost (id) {
  return fetch(
    `${SERVER_HOSTNAME}/posts/${id}`,
    { 
      method: 'POST',
      headers: { 'Authorization': AUTHORIZATION },
      body: {
        option: 'upVote'
      }
    }).then((res) => res.json())
}

export default upvotePost