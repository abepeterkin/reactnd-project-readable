const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function fetchCategoryPosts (category) {
  return fetch(
    `${SERVER_HOSTNAME}/${category}/posts`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())
}

export default fetchCategoryPosts
