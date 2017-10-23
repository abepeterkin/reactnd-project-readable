import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'
import Modal from 'react-modal'

class NewPost extends Component {

  state = {
    modalOpen: false,
    author: '',
    title: '',
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

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value
    })
  }

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
    this.props.dispatch(addPost(this.state.title, this.state.body, this.state.author, category))
    event.preventDefault()
    this.closeEditModal()
  }

  render () {
    const categories = this.props.categories
    return (
      <div>
      <button  onClick={this.openEditModal.bind(this)}>Make a new post</button>
      <Modal
      className='modal'
      overlayClassName='overlay'
      isOpen={this.state.modalOpen}
      onRequestClose={this.closeEditModal.bind(this)}
      contentLabel='Modal'
    >
      <form onSubmit={this.submitComment.bind(this)}>
        Category:
        <select id='category-select' onChange={this.handleCategoryChange.bind(this)}>
          {categories.map((category) => (
            <option key={category} value={category}> {category} </option>
          ))}
        </select> <br />
        Author: 
        <textarea
          onBlur={this.handleAuthorChange.bind(this)}> 
        </textarea> <br />
        Title: 
        <textarea
          onBlur={this.handleTitleChange.bind(this)}>
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

export default connect()(NewPost)