const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function getCategories () {
  return fetch(
    `${SERVER_HOSTNAME}/categories`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())//TODO
}

export default getCategories