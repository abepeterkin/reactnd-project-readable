import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCategoryPosts } from '../actions'
import PostStub from './PostStub'
import NewPost from './NewPost'

import { voteScoreSort, timestampSort } from '../utils/sort'

class CategoryPage extends Component {

  state = {
    sort: voteScoreSort
  }

  componentDidMount() {
    this.props.dispatch(fetchCategoryPosts(this.props.match.params.category))
  }

  changeSortMethod(event) {
    if (event.target.value === "score") {
      this.setState({sort: voteScoreSort})
    } else if (event.target.value === 'time') {
      this.setState({sort: timestampSort})
    }
  }

  render () {
    const category = this.props.match.params.category
    const { posts } = this.props
    return (
      <div>
      <NewPost categories={[category]}/>
      <p><b>Posts in category: {category}</b></p>
      <form>
          Sort by 
          <select onChange={this.changeSortMethod.bind(this)}>
            <option value="score">Score</option>
            <option value="time">Time Posted</option>
          </select>
        </form>  <br />
      {voteScoreSort(Object.values(posts)).map((post) => (
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
    posts: state.posts
  }
}

export default connect (
  mapStateToProps
)(CategoryPage)