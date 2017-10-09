const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function fetchCategories () {
  return fetch(
    `${SERVER_HOSTNAME}/categories`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())
}

export default fetchCategories