import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPost, upvotePost, downvotePost } from '../actions'

class Post extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.id))
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
      return (
        <div className='post'>
          <p>(Posted by <b>{author}</b> on <b>{timeFormatted}</b>)</p>
          <p>Score: <b>{voteScore}  </b>
            [<span style={{color: 'blue', cursor: 'pointer'}} onClick={this.upvote.bind(this)}>+1</span>]
            [<span style={{color: 'blue', cursor: 'pointer'}} onClick={this.downvote.bind(this)}>-1</span>]
          </p>
          <h3>{title}</h3>
          <p>{body}</p>
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
    post: state.posts[postId]
  }
}

export default connect(
  mapStateToProps
)(Post)