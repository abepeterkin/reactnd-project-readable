import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchPostComments, upvotePost, downvotePost } from '../actions'
import Comment from './Comment'

class PostPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.match.params.id))
    this.props.dispatch(fetchPostComments(this.props.match.params.id))
  }

  upvote() {
    this.props.dispatch(upvotePost(this.props.match.params.id))
  }

  downvote() {
    this.props.dispatch(downvotePost(this.props.match.params.id))
  }

  render () {
    if (this.props.post) {
      const {id, timestamp, title, body, author, category, voteScore} = this.props.post
      const date = new Date(timestamp)
      const timeFormatted = date.toDateString()
      return (
        <div>
          <p>(Posted by <b>{author}</b> on <b>{timeFormatted}</b>)</p>
          <p>Score: <b>{voteScore}  </b>
            [<span style={{color: 'blue', cursor: 'pointer'}} onClick={this.upvote.bind(this)}>+1</span>]
            [<span style={{color: 'blue', cursor: 'pointer'}} onClick={this.downvote.bind(this)}>-1</span>]
          </p>
          <h3>{title}</h3>
          <p>{body}</p>
          <p>COMMENTS:</p>
          {Object.values(this.props.comments).map((comment) => (
            <Comment 
              key={comment.id}
              id={comment.id}/>
          ))}
        </div>
      )
    } else {
      return (
        <div>
          <p>Sorry, that post could not be found.</p>
          <p><a href='/'>BACK TO HOME PAGE</a></p>
        </div>
      )
    }
  }
}

function mapStateToProps (state, ownProps) {
  const postId = ownProps.match.params.id
  return {
    post: state.posts[postId],
    comments: Object.values(state.comments).filter((comment) => {
      return comment.parentId === postId && !comment.deleted
    })
  }
}

export default connect(
  mapStateToProps
)(PostPage)