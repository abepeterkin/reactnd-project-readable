import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchComment, upvoteComment, downvoteComment } from '../actions'

class Comment extends Component {

  componentDidMount() {
    this.props.dispatch(fetchComment(this.props.id))
  }

  upvote() {
    this.props.dispatch(upvoteComment(this.props.id))
  }

  downvote() {
    this.props.dispatch(downvoteComment(this.props.id))
  }

  render () {
    const {id, parentId, timestamp, body, author, voteScore} = this.props.comment
    return (
      <div className='comment'>
        <b>{voteScore}  </b>
        [<span style={{color: 'blue', cursor: 'pointer'}} onClick={this.upvote.bind(this)}>+1</span>]
        [<span style={{color: 'blue', cursor: 'pointer'}} onClick={this.downvote.bind(this)}>-1</span>]
        <b>{' ' + author}</b>: {body}
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  const commentId = ownProps.id
  return {
    comment: state.comments[commentId]
  }
}

export default connect(
  mapStateToProps
)(Comment)