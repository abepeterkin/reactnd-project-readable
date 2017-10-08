export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'

export function addComment({ body, author, parentId }) {
  return {
    type: ADD_COMMENT,
    body,
    author,
    parentId
  }
}

export function editComment({ id, body }) {
  return {
    type: EDIT_COMMENT,
    id,
    body
  }
}

export function deleteComment({ id }) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export function upvoteComment({ id }) {
  return {
    type: UPVOTE_COMMENT,
    id
  }
}

export function downvoteComment({ id }) {
  return {
    type: DOWNVOTE_COMMENT,
    id
  }
}