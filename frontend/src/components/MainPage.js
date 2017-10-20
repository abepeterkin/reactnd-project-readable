import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, fetchAllPosts } from '../actions'
import PostStub from './PostStub'
import { voteScoreSort, timestampSort } from '../utils/sort'

class MainPage extends Component {

  state = {
    sort: voteScoreSort
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories())
    this.props.dispatch(fetchAllPosts())
  }

  changeSortMethod(event) {
    if (event.target.value === "score") {
      this.setState({sort: voteScoreSort})
    } else if (event.target.value === 'time') {
      this.setState({sort: timestampSort})
    }
  }

  render () {
    const { categories, posts } = this.props
    const { sort } = this.state
    return (
      <div>
        <br/> <b>Categories:</b>
        {Object.values(categories).map((category) => (
          <div key={category.name}>
            <a href={'category/' + category.path} > {category.name} </a>
          </div>
        ))}
        <br /> <b>Posts:</b>
        <form>
          <span> Sort by </span>
          <select onChange={this.changeSortMethod.bind(this)}>
            <option value="score">Score</option>
            <option value="time">Time Posted</option>
          </select>
        </form>
        {this.state.sort(Object.values(posts)).map((post) => (
          <PostStub
            key={post.id}
            post={post}
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