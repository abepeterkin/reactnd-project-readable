import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {

  render () {
    const {id, parentId, timestamp, body, author, votescore} = this.props
    return (
      <div>
        <p>{author}: {body}</p>
      </div>
    )
  }
}

Comment.propTypes = {
  id: PropTypes.string,
  parentId: PropTypes.string,
  timestamp: PropTypes.number,
  body: PropTypes.string,
  author: PropTypes.string,
  voteScore: PropTypes.number
  // deleted: PropTypes.bool
  // parentDeleted: PropTypes.bool
}

export default Comment