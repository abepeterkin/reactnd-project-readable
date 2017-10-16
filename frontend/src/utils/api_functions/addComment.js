const uuidv4 = require('uuid/v4')
const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function addComment (body, author, parentId) {
  const options = {
    method: 'POST',
    uri: `${SERVER_HOSTNAME}/comments`,
    headers: { 'Authorization': AUTHORIZATION },
    body: {
      id: uuidv4(),
      body,
      author,
      parentId,
      timestamp: Date.now()
    },
    json: true
  }
  return rp(options)
}

export default addComment