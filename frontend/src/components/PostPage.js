import React, {Component} from 'react'

class PostPage extends Component {

  state = {

  }
  
  componentDidMount() {

  }

  render () {
    const postId = this.props.match.params.id
    return (
      <p>This is the post page! Post ID: {postId}</p>
    )
  }
}

export default PostPage