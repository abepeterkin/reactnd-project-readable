import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import Modal from 'react-modal'

class NewComment extends Component {

  state = {
    modalOpen: false,
    author: '',
    body: ''
  }

  openEditModal() {
    this.setState({
      modalOpen: true
    })
  }

  closeEditModal() {
    this.setState({
      modalOpen: false
    })
  }

  handleAuthorChange(event) {
    this.setState({
      author: event.target.value
    })
  }

  handleBodyChange(event) {
    this.setState({
      body: event.target.value
    })
  }

  submitComment(event) {
    this.props.dispatch(addComment(this.state.body, this.state.author, this.props.postId))
    event.preventDefault()
    this.closeEditModal()
  }

  render () {
    return (
      <div>
      <button  onClick={this.openEditModal.bind(this)}>Post a new comment</button>
      <Modal
      className='modal'
      overlayClassName='overlay'
      isOpen={this.state.modalOpen}
      onRequestClose={this.closeEditModal.bind(this)}
      contentLabel='Modal'
    >
      <form onSubmit={this.submitComment.bind(this)}>
        Author: 
        <textarea
          onBlur={this.handleAuthorChange.bind(this)}> 
        </textarea> <br />
        Body: 
        <textarea
          onBlur={this.handleBodyChange.bind(this)}>
        </textarea> <br />
        <button type='submit'>SUBMIT </button>
      </form>
    </Modal>
      </div>
    )
  }
}

export default connect()(NewComment)