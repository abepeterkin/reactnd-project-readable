import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchPostComments, upvotePost, downvotePost, deletePost } from '../actions'
import { voteScoreSort } from '../utils/sort'
import Comment from './Comment'
import EditPost from './EditPost'
import NewComment from './NewComment'

class Post extends Component {

  state = {
    editModalOpen: false,
    commentModalOpen: false,
    newTitle: null,
    newBody: null
  }

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.id))
    this.props.dispatch(fetchPostComments(this.props.id))
    if (this.props.post) {
      this.setState({
        newTitle: this.props.post.title,
        newBody: this.props.post.body
      })
    }
  }

  upvote() {
    this.props.dispatch(upvotePost(this.props.id))
  }

  downvote() {
    this.props.dispatch(downvotePost(this.props.id))
  }

  delete() {
    this.props.dispatch(deletePost(this.props.id))
    window.location.href = '/';
  }

  render () {
    if (this.props.post) {
      const {id, title, timestamp, body, author, voteScore} = this.props.post
      const date = new Date(timestamp)
      const timeFormatted = date.toDateString()
      const comments = this.props.comments
      return (
        <div className='post'>
          <p>Posted by <b>{author}</b> on <b>{timeFormatted}</b> </p> 
          <EditPost post={this.props.post} />
          <button  onClick={this.delete.bind(this)}>Delete</button>
          <p>Score: <b>{voteScore}  </b>
            <button className='upvote-button' onClick={this.upvote.bind(this)}>+1</button>
            <button className='downvote-button' onClick={this.downvote.bind(this)}>-1</button>
          </p>
          <h3>{title}</h3>
          <p>{body}</p>
          <p><b>COMMENTS ({comments.length}):</b></p>
          <NewComment postId={id}/>
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