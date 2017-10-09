const API = {
  addComment: require('./api_functions/addComment'),
  addPost: require('./api_functions/addPost'),
  deleteComment: require('./api_functions/deleteComment'),
  deletePost: require('./api_functions/deletePost'),
  downvoteComment: require('./api_functions/downvoteComment'),
  downvotePost: require('./api_functions/downvotePost'),
  editComment: require('./api_functions/editComment'),
  editPost: require('./api_functions/editPost'),
  fetchAllPosts: require('./api_functions/fetchAllPosts'),
  fetchCategories: require('./api_functions/fetchCategories'),
  fetchCategoryPosts: require('./api_functions/fetchCategoryPosts'),
  fetchComment: require('./api_functions/fetchComment'),
  fetchPost: require('./api_functions/fetchPost'),
  fetchPostComments: require('./api_functions/fetchPostComments'),
  upvoteComment: require('./api_functions/upvoteComment'),
  upvotePost: require('./api_functions/upvotePost'),
}

export default API