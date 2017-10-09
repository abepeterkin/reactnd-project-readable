const uuidv4 = require('uuid/v4')
const { SERVER_HOSTNAME, AUTHORIZATION } = require('./constants')

function addPost (id, title, body, author, category) {
  return fetch(
    `${SERVER_HOSTNAME}/posts`,
    { 
      method: 'POST',
      headers: { 'Authorization': AUTHORIZATION },
      body: {
        id: uuidv4(),
        title,
        body,
        author,
        category,
        timestamp: Date.now()
      }
    }).then((res) => res.json())
}

export default addPost