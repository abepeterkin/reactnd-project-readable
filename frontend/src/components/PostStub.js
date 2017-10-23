import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPostComments, upvotePost, downvotePost } from '../actions'

class PostStub extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPostComments(this.props.post.id))
  }

  upvote() {
    this.props.dispatch(upvotePost(this.props.post.id))
  }

  downvote() {
    this.props.dispatch(downvotePost(this.props.post.id))
  }

  render () {
    const { id, title, author, category, voteScore } = this.props.post
    const comments = this.props.comments
    return (
      <div className='post-stub'>
        <span>{voteScore} 
          <button className='upvote-button' onClick={this.upvote.bind(this)}>+1</button>
          <button className='downvote-button' onClick={this.downvote.bind(this)}>-1</button> 
        </span>
        <a href={`/${category}/${id}`}><b>{author}:</b> {title}</a> 
        {comments && 
          <span> ({comments.length} comments)</span>
        }
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  const postId = ownProps.post.id
  return {
    comments: Object.values(state.comments).filter((comment) => {
      return comment.parentId === postId && !comment.deleted
    })
  }
}


export default connect(
  mapStateToProps
)(PostStub)