import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'
import Modal from 'react-modal'
import { Input, TextArea, Select, Button, Header, Form } from 'semantic-ui-react'

class NewPost extends Component {

  state = {
    modalOpen: false,
    author: '',
    title: '',
    body: '',
    category: null
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

  /*handleCategoryChange(event) {
    console.log('gets called')
    this.setState({
      category: event.target.value
    })
  }*/

  handleAuthorChange(event) {
    this.setState({
      author: event.target.value
    })
  }

  handleTitleChange(event) {
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
    const category = document.getElementById('category-select').value;
    if (category) {
      this.props.dispatch(addPost(this.state.title, this.state.body, this.state.author, category))
      event.preventDefault()
      this.closeEditModal()
    }
  }

  render () {
    const categories = this.props.categories.map((category) => (
      {
        key: category,
        value: category,
        text: category
      }
    ))
    return (
      <div>
      <Button onClick={this.openEditModal.bind(this)}>Make a new post</Button>
      <Modal
        className='modal'
        overlayClassName='overlay'
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeEditModal.bind(this)}
        contentLabel='Modal'
      >
      <Form onSubmit={this.submitComment.bind(this)}>
        <Header as='h4' > Category: </Header>
        <select id='category-select' /*onChange={this.handleCategoryChange.bind(this)}*/>
          {categories.map((category) => (
            <option key={category.key} value={category.value}> {category.text} </option>
          ))}
        </select> <br />
        <Header as='h4'>Author:</ Header> 
        <Input
          onBlur={this.handleAuthorChange.bind(this)}> 
        </ Input> <br />
        <Header as='h4'>Title:</Header> 
        <Input
          onBlur={this.handleTitleChange.bind(this)}>
        </Input> <br />
        <Header as='h4'>Body:</Header> 
        <TextArea
          rows='3'
          onBlur={this.handleBodyChange.bind(this)}>
        </TextArea> <br />
        <Button type='submit'>SUBMIT </Button>
      </Form>
      </Modal>
      </div>
    )
  }
}

export default connect()(NewPost)