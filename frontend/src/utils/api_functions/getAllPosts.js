const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function getAllPosts () {
  return fetch(
    `${SERVER_HOSTNAME}/posts`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())//TODO
}

export default getAllPosts