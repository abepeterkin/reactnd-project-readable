import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchPostComments, upvotePost, downvotePost, deletePost } from '../actions'
import { voteScoreSort } from '../utils/sort'
import Comment from './Comment'
import EditPost from './EditPost'
import NewComment from './NewComment'
import { Icon, Button, Segment, Header } from 'semantic-ui-react'

class Post extends Component {

  state = {
    editModalOpen: false,
    commentModalOpen: false,
    newTitle: null,
    newBody: null
  }

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.id))
    this.props.dispatch(fetchPostComments(this.props.id))
    if (this.props.post) {
      this.setState({
        newTitle: this.props.post.title,
        newBody: this.props.post.body
      })
    }
  }

  upvote() {
    this.props.dispatch(upvotePost(this.props.id))
  }

  downvote() {
    this.props.dispatch(downvotePost(this.props.id))
  }

  delete() {
    this.props.dispatch(deletePost(this.props.id))
    window.location.href = '/';
  }

  render () {
    if (this.props.post) {
      const {id, title, timestamp, body, author, voteScore, category} = this.props.post
      const date = new Date(timestamp)
      const timeFormatted = date.toDateString()
      const comments = this.props.comments
      return (
        <div >
          <Segment.Group>
            <Segment>
              <Header as='h3'>{title}</Header>
              <p>{body}</p>
            </Segment>
            <Segment secondary>
              <p> Posted by <b>{author}</b> on <b>{timeFormatted}</b> in category: <b>{category}</b></p>
              Score: <b>{voteScore}  </b>
              <Icon link size='big' name='thumbs outline up' onClick={this.upvote.bind(this)}></Icon>
              <Icon  link size='big' name='thumbs outline down' onClick={this.downvote.bind(this)}></Icon> 
              <EditPost post={this.props.post} />
              <Button basic color='red' onClick={this.delete.bind(this)}>Delete</Button>
            </Segment>
          </Segment.Group>
          <Header as='h3' dividing>COMMENTS ({comments.length}):</Header>
          <NewComment postId={id}/> <br />
          {(comments.length < 1) &&
            <p> No comments yet.</p>
          }
          {voteScoreSort(Object.values(comments)).map((comment) => (
            <Comment 
              key={comment.id}
              id={comment.id}
            />
          ))}
          
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
    post: state.posts[postId],
    comments: Object.values(state.comments).filter((comment) => {
      return comment.parentId === postId && !comment.deleted
    })
  }
}

export default connect(
  mapStateToProps
)(Post)