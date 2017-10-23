import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchComment, upvoteComment, downvoteComment, editComment, deleteComment } from '../actions'
import EditComment from './EditComment'

class Comment extends Component {

  state = {
    editModalOpen: false,
    newBody: null
  }

  componentDidMount() {
    this.props.dispatch(fetchComment(this.props.id))
    if (this.props.comment) {
      this.setState({
        newBody: this.props.comment.body
      })
    }
  }

  upvote() {
    this.props.dispatch(upvoteComment(this.props.id))
  }

  downvote() {
    this.props.dispatch(downvoteComment(this.props.id))
  }

  delete() {
    this.props.dispatch(deleteComment(this.props.id))
  }

  openEditModal() {
    this.setState({
      editModalOpen: true
    })
  }

  closeEditModal() {
    this.setState({
      editModalOpen: false
    })
  }

  handleBodyChange(event) {
    this.setState({
      newBody: event.target.value
    })
  }

  submitEdit(event) {
    this.props.dispatch(editComment(this.props.id, this.state.newBody))
    event.preventDefault()
    this.closeEditModal()
  }

  render () {
    const {body, author, voteScore} = this.props.comment
    return (
      <div className='comment'>
        <b>{' ' + author}</b>: {body} <br />
        Score: {voteScore}
        <button className='upvote-button' onClick={this.upvote.bind(this)}>+1</button>
        <button className='downvote-button'onClick={this.downvote.bind(this)}>-1</button> 
        <EditComment comment={this.props.comment}/>
        <button onClick={this.delete.bind(this)}>Delete</button>
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