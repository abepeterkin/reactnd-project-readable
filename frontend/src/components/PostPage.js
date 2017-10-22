import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchPostComments, upvotePost, downvotePost } from '../actions'
import Post from './Post'

class PostPage extends Component {

  render () {
    const id = this.props.match.params.id
    return (
      <div>
        <Post id={id} />
      </div>
    )
  }
}

export default PostPage