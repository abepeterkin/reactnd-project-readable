import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPostComments, upvotePost, downvotePost } from '../actions'
import { Icon, Segment } from 'semantic-ui-react'

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
      <Segment>
        <span>Score: <b>{voteScore}</b> 
          <Icon link size='large' name='thumbs outline up' onClick={this.upvote.bind(this)}></Icon>
          <Icon link size='large' name='thumbs outline down' onClick={this.downvote.bind(this)}></Icon> 
        </span>
        <a href={`/${category}/${id}`}><b>{author}:</b> {title}</a> 
        {comments && 
          <span> ({comments.length} comments)</span>
        }
      </Segment>
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