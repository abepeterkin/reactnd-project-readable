const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function fetchAllPosts () {
  return fetch(
    `${SERVER_HOSTNAME}/posts`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())
}

export default fetchAllPosts