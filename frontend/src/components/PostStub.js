import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPostComments } from '../actions'

class PostStub extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPostComments(this.props.post.id))
  }

  render () {
    const { id, timestamp, title, body, author, category, voteScore } = this.props.post
    const comments = this.props.comments
    return (
      <div className='post-stub'>
        ({voteScore}) <a href={'/post/' + id}><b>{author}:</b> {title}</a> 
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