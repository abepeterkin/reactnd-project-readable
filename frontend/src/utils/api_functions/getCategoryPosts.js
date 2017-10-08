const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function getCategoryPosts (category) {
  return fetch(
    `${SERVER_HOSTNAME}/${category}/posts`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())//TODO
}

export default getCategoryPosts
