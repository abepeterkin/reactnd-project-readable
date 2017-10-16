import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PostStub extends Component {

  render () {
    const {id, timestamp, title, body, author, category, voteScore} = this.props
    return (
      <div className='post-stub'>
        ({voteScore}) <a href={'/post/' + id}><b>{author}:</b> {title}</a>
      </div>
    )
  }
}

PostStub.propTypes = {
  id: PropTypes.string,
  timestamp: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  voteScore: PropTypes.number
  // deleted: PropTypes.bool
}

export default PostStub