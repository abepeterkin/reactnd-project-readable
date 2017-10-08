const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function getPostComments (id) {
  return fetch(
    `${SERVER_HOSTNAME}/posts/${id}/comments`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())//TODO
}

export default getPostComments