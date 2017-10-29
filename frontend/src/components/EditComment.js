import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editComment } from '../actions'
import Modal from 'react-modal'
import { Button, TextArea, Header, Form } from 'semantic-ui-react'

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
      <span>
      <Button basic color='blue' compact onClick={this.openEditModal.bind(this)}>Edit</Button>
      <Modal
        className='modal'
        overlayClassName='overlay'
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeEditModal.bind(this)}
        contentLabel='Modal'
      >
      <Form onSubmit={this.submitEdit.bind(this)}>
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

export default connect()(EditComment)