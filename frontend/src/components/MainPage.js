import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, fetchAllPosts } from '../actions'
import PostStub from './PostStub'
import { voteScoreSort, timestampSort } from '../utils/sort'
import NewPost from './NewPost'

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
        <NewPost categories={Object.keys(categories)}/>
        <p> <b>Categories:</b> </p>
        {Object.values(categories).map((category) => (
          <div key={category.name}>
            <a href={`/${category.path}`} > {category.name} </a>
          </div>
        ))} <br /> 
        <p><b>Posts:</b> </p>
        <form>
          Sort by
          <select onChange={this.changeSortMethod.bind(this)}>
            <option value="score">Score</option>
            <option value="time">Time Posted</option>
          </select>
        </form> <br />
        {sort(Object.values(posts)).map((post) => (
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