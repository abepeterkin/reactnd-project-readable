import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editComment } from '../actions'
import Modal from 'react-modal'

class EditComment extends Component {

  state = {
    modalOpen: false,
    newBody: null
  }

  componentDidMount() {
    this.setState({
      newBody: this.props.comment.body
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

  handleBodyChange(event) {
    this.setState({
      newBody: event.target.value
    })
  }

  submitEdit(event) {
    this.props.dispatch(editComment(this.props.comment.id, this.state.newBody))
    event.preventDefault()
    this.closeEditModal()
  }

  render () {
    const {body} = this.props.comment
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

export default connect()(EditComment)