import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCategoryPosts } from '../actions'
import PostStub from './PostStub'

class CategoryPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategoryPosts(this.props.match.params.category))
  }

  render () {
    const category = this.props.match.params.category
    const { posts } = this.props
    return (
      <div>
      <p>Category: {category}</p>
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
    posts: state.posts
  }
}

export default connect (
  mapStateToProps
)(CategoryPage)