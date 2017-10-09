const API = require('../utils/API')

export const RECIEVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECIEVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS'

export const receiveCategories = categories => ({
  type: RECIEVE_CATEGORIES,
  categories
})

export const fetchCategories = () => dispatch => (
  API.fetchCategories().then(categories => dispatch(receiveCategories(categories)))
)

export const recieveCategoryPosts = posts => ({
  type: RECIEVE_CATEGORY_POSTS,
  posts
})

export const fetchCategoryPosts = (category) => dispatch => (
  API.fetchCategoryPosts().then(posts => dispatch(recieveCategoryPosts(posts)))
)
