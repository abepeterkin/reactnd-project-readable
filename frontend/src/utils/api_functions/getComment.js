const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function getComment (id) {
  return fetch(
    `${SERVER_HOSTNAME}/comments/${id}`,
    { 
      method: 'GET',
      headers: { 'Authorization': AUTHORIZATION }
    }).then((res) => res.json())//TODO
}

export default getComment