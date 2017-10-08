const uuidv4 = require('uuid/v4')
const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function addComment (body, author, parentId) {
  return fetch(
    `${SERVER_HOSTNAME}/comments`,
    { 
      method: 'POST',
      headers: { 'Authorization': AUTHORIZATION },
      body: {
        id: uuidv4(),
        body,
        author,
        parentId,
        timestamp: Date.now()
      }
    })
}

export default addComment