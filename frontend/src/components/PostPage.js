import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchPostComments, upvotePost, downvotePost } from '../actions'
import Comment from './Comment'
import Post from './Post'
import { voteScoreSort } from '../utils/sort'

class PostPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPostComments(this.props.match.params.id))
  }

  render () {
    const id = this.props.match.params.id
    return (
      <div>
        <Post id={id} />
        <p>COMMENTS:</p>
        {(this.props.comments.length < 1) &&
          <p> No comments yet.</p>
        }
        {voteScoreSort(Object.values(this.props.comments)).map((comment) => (
          <Comment 
            key={comment.id}
            id={comment.id}
          />
        ))}
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  const postId = ownProps.match.params.id
  return {
    comments: Object.values(state.comments).filter((comment) => {
      return comment.parentId === postId && !comment.deleted
    })
  }
}

export default connect(
  mapStateToProps
)(PostPage)