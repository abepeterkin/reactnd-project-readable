import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PostStub extends Component {

  render () {
    const {id, timestamp, title, body, author, category, voteScore} = this.props.post
    return (
      <div className='post-stub'>
        ({voteScore}) <a href={'/post/' + id}><b>{author}:</b> {title}</a>
      </div>
    )
  }
}

export default PostStub