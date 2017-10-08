import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Post extends Component {

  render () {
    const {id, timestamp, title, body, author, category, votescore} = this.props
    return (
      <div>
        <p><b>{author}: {title}</b></p>
        <p>{body}</p>
      </div>
    )
  }
}

Post.propTypes = {
  id: PropTypes.string,
  timestamp: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  voteScore: PropTypes.number
  // deleted: PropTypes.bool
}

export default Post