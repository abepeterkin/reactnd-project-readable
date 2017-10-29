import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editPost } from '../actions'
import Modal from 'react-modal'
import { Button, Header, TextArea, Form } from 'semantic-ui-react'

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
      <span>
      <Button basic color='blue' onClick={this.openEditModal.bind(this)}>Edit</Button>
      <Modal
        className='modal'
        overlayClassName='overlay'
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeEditModal.bind(this)}
        contentLabel='Modal'
      >
        <Form onSubmit={this.submitEdit.bind(this)}>
          <Header as='h4'>Title:</Header> 
          <TextArea 
            defaultValue={title} 
            onBlur={this.handleTitleChange.bind(this)}> 
          </TextArea> <br />
          <Header as='h4'>Body:</Header> 
          <TextArea 
            defaultValue={body} 
            onBlur={this.handleBodyChange.bind(this)}>
          </TextArea> <br />
          <Button type='submit'>SUBMIT </Button>
        </Form>
      </Modal>
      </span>
    )
  }
}

export default connect()(EditPost)