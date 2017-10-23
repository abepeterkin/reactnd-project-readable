const uuidv4 = require('uuid/v4')
const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')
const rp = require('request-promise');

function addPost (title, body, author, category) {
  const options = {
    method: 'POST',
    uri: `${SERVER_HOSTNAME}/posts`,
    headers: { 'Authorization': AUTHORIZATION },
    body: {
      id: uuidv4(),
      title,
      body,
      author,
      category,
      timestamp: Date.now()
    },
    json: true
  }
  return rp(options)
}

export default addPost