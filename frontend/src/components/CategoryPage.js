import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCategoryPosts, deletePost } from '../actions'
import PostStub from './PostStub'
import NewPost from './NewPost'
import { Header, Divider } from 'semantic-ui-react'

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

  deletePost(id) {
    this.props.dispatch(deletePost(id))
    this.setState(this.state)
  }

  render () {
    const category = this.props.match.params.category
    const { posts } = this.props
    return (
      <div>
      <Header as='h2'>Category:  {category} </Header>
      <NewPost categories={[category]}/>
      <Header as='h2' >Posts: </Header>
      <form>
          Sort by 
          <select onChange={this.changeSortMethod.bind(this)}>
            <option value="score">Score</option>
            <option value="time">Time Posted</option>
          </select>
        </form>
        <Divider />
      {voteScoreSort(Object.values(posts)).map((post) => (
        <PostStub
          key={post.id}
          post={post}
          deletePost={this.deletePost.bind(this)}
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