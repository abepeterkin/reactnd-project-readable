import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import Modal from 'react-modal'
import { Button, Header, Form, TextArea } from 'semantic-ui-react'

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
      <Button onClick={this.openEditModal.bind(this)}>Post a new comment</Button>
      <Modal
      className='modal'
      overlayClassName='overlay'
      isOpen={this.state.modalOpen}
      onRequestClose={this.closeEditModal.bind(this)}
      contentLabel='Modal'
      >
        <Form onSubmit={this.submitComment.bind(this)}>
          <Header as='h4'>Author:</Header> 
          <TextArea
            onBlur={this.handleAuthorChange.bind(this)}> 
          </TextArea>
          <Header as='h4'>Body:</Header> 
          <TextArea
            onBlur={this.handleBodyChange.bind(this)}>
          </TextArea> <br />
          <Button type='submit'>SUBMIT </Button>
        </Form>
      </Modal>
      </div>
    )
  }
}

export default connect()(NewComment)