const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function getPost (id) {
  return fetch(
    `${SERVER_HOSTNAME}/posts/${id}`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())//TODO
}

export default getPost