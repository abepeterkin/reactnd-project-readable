import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, fetchAllPosts } from '../actions'
import PostStub from './PostStub'

class MainPage extends Component {

  state = {
    // nothing here yet
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories())
    this.props.dispatch(fetchAllPosts())
  }

  render () {
    const { categories, posts } = this.props
    return (
      <div>
        <p>This is the main page!</p>
        <p>Categories:</p>
        {Object.values(categories).map((category) => (
          <div key={category.name}>
            <a href={'category/' + category.path} > {category.name} </a>
          </div>
        ))}
        <p>Posts:</p>
        {Object.values(posts).map((post) => (
          <PostStub
            key={post.id}
            id={post.id}
            timestamp={post.timestamp}
            title={post.title}
            body={post.body}
            author={post.author}
            category={post.category}
            voteScore={post.voteScore}
          />
      ))}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories,
    posts: state.posts
  }
}

export default connect(
  mapStateToProps
)(MainPage)