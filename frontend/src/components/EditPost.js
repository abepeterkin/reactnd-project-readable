import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editPost } from '../actions'
import Modal from 'react-modal'

class EditPost extends Component {

  state = {
    modalOpen: false,
    newTitle: null,
    newBody: null
  }

  componentDidMount() {
    this.setState({
      newTitle: this.props.post.title,
      newBody: this.props.post.body
    })
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

  handleTitleChange(event) {
    this.setState({
      newTitle: event.target.value
    })
  }

  handleBodyChange(event) {
    this.setState({
      newBody: event.target.value
    })
  }

  submitEdit(event) {
    this.props.dispatch(editPost(this.props.post.id, this.state.newTitle, this.state.newBody))
    event.preventDefault()
    this.closeEditModal()
  }

  render () {
    const {title, body} = this.props.post
    return (
      <div>
      <button  onClick={this.openEditModal.bind(this)}>Edit</button>
      <Modal
        className='modal'
        overlayClassName='overlay'
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeEditModal.bind(this)}
        contentLabel='Modal'
      >
        <form onSubmit={this.submitEdit.bind(this)}>
          Title: 
          <textarea 
            defaultValue={title} 
            onBlur={this.handleTitleChange.bind(this)}> 
          </textarea> <br />
          Body: <textarea 
            defaultValue={body} 
            onBlur={this.handleBodyChange.bind(this)}>
          </textarea> <br />
          <button type='submit'>SUBMIT </button>
        </form>
      </Modal>
      </div>
    )
  }
}

export default connect()(EditPost)