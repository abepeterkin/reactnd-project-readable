import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, fetchAllPosts } from '../actions'
import PostStub from './PostStub'
import { voteScoreSort, timestampSort } from '../utils/sort'
import NewPost from './NewPost'
import { Header, Divider } from 'semantic-ui-react'

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
        <Header as='h1'> Welcome to Readable! </Header>
        <NewPost categories={Object.keys(categories)}/>
        <Header as='h2'>Posts: </Header>
          Sort by
          <select onChange={this.changeSortMethod.bind(this)}>
            <option value="score">Score</option>
            <option value="time">Time Posted</option>
          </select>
          <Divider />
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