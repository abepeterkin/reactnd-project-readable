import React, {Component} from 'react'

class PostPage extends Component {

  state = {

  }
  
  componentDidMount() {

  }

  render () {
    const postId = this.props.match.params.id
    return (
      <p>Post ID: {postId}</p>
    )
  }
}

export default PostPage