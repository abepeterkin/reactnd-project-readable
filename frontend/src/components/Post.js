import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPost, fetchPostComments, upvotePost, downvotePost } from '../actions'
import { voteScoreSort } from '../utils/sort'
import Comment from './Comment'

class Post extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.id))
    this.props.dispatch(fetchPostComments(this.props.id))
  }

  upvote() {
    this.props.dispatch(upvotePost(this.props.id))
  }

  downvote() {
    this.props.dispatch(downvotePost(this.props.id))
  }

  render () {
    if (this.props.post) {
      const {id, title, timestamp, body, author, voteScore} = this.props.post
      const date = new Date(timestamp)
      const timeFormatted = date.toDateString()
      const comments = this.props.comments
      return (
        <div className='post'>
          <p>(Posted by <b>{author}</b> on <b>{timeFormatted}</b>)</p>
          <p>Score: <b>{voteScore}  </b>
            [<span style={{color: 'blue', cursor: 'pointer'}} onClick={this.upvote.bind(this)}>+1</span>]
            [<span style={{color: 'blue', cursor: 'pointer'}} onClick={this.downvote.bind(this)}>-1</span>]
          </p>
          <h3>{title}</h3>
          <p>{body}</p>
          <p>COMMENTS ({comments.length}):</p>
          {(comments.length < 1) &&
            <p> No comments yet.</p>
          }
          {voteScoreSort(Object.values(comments)).map((comment) => (
            <Comment 
              key={comment.id}
              id={comment.id}
            />
          ))}
        </div>
      )
    } else {
      return <p> Sorry, that post was not found. </p>
    }
    
  }
}

function mapStateToProps (state, ownProps) {
  const postId = ownProps.id
  return {
    post: state.posts[postId],
    comments: Object.values(state.comments).filter((comment) => {
      return comment.parentId === postId && !comment.deleted
    })
  }
}

export default connect(
  mapStateToProps
)(Post)