const API = require('../utils/api')

export const RECIEVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECIEVE_POSTS = 'RECEIVE_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'
export const RECIEVE_COMMENTS = 'RECEIVE_COMMENTS'

export const receiveCategories = categories => ({
  type: RECIEVE_CATEGORIES,
  categories
})

export const recievePosts = posts => ({
  type: RECIEVE_POSTS,
  posts
})

export const deletePosts = posts => ({
  type: DELETE_POSTS,
  posts
})

export const recieveComments = comments => ({
  type: RECIEVE_COMMENTS,
  comments
})

// CATEGORY ACTIONS

export const fetchCategories = () => dispatch => (
  API.fetchCategories().then(response => dispatch(receiveCategories(response.categories)))
)

export const fetchCategoryPosts = (category) => dispatch => (
  API.fetchCategoryPosts(category).then(posts => dispatch(recievePosts(posts)))
)

// POST ACTIONS

export const fetchAllPosts = () => dispatch => (
  API.fetchAllPosts().then(posts => dispatch(recievePosts(posts)))
)

export const fetchPost = (id) => dispatch => (
  API.fetchPost(id).then(post => dispatch(recievePosts([post])))
)

export const addPost = (title, body, author, category) => dispatch => (
  API.addPost(title, body, author, category).then(post => dispatch(recievePosts([post])))
)

export const editPost = (id, title, body) => dispatch => (
  API.editPost(id, title, body).then(post => dispatch(recievePosts([post])))
)

export const deletePost = (id) => dispatch => (
  API.deletePost(id).then(post => dispatch(deletePosts([post])))
)

export const upvotePost = (id) => dispatch => (
  API.upvotePost(id).then(post => dispatch(recievePosts([post])))
)

export const downvotePost = (id) => dispatch => (
  API.downvotePost(id).then(post => dispatch(recievePosts([post])))
)

export const fetchPostComments = (id) => dispatch => (
  API.fetchPostComments(id).then(comments => dispatch(recieveComments(comments)))
)

// COMMENT ACTIONS

export const fetchComment = (id) => dispatch => (
  API.fetchAllPosts(id).then(comment => dispatch(recieveComments([comment])))
)

export const addComment = (body, author, parentId) => dispatch => (
  API.addComment(body, author, parentId).then(comment => dispatch(recieveComments([comment])))
)

export const editComment = (id, body) => dispatch => (
  API.editComment(id, body).then(comment => dispatch(recieveComments([comment])))
)

export const deleteComment = (id) => dispatch => (
  API.deleteComment(id).then(comment => dispatch(recieveComments([comment])))
)

export const upvoteComment = (id) => dispatch => (
  API.upvoteComment(id).then(comment => dispatch(recieveComments([comment])))
)

export const downvoteComment = (id) => dispatch => (
  API.downvoteComment(id).then(comment => dispatch(recieveComments([comment])))
)


