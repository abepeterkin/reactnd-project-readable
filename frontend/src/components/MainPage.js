import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class MainPage extends Component {

  state = {
    // nothing here yet
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories())
  }

  render () {
    //console.log('MAINPAGE LINE 16:')
    //console.log(this.props)
    const { categories} = this.props
    return (
      <div>
        <p>This is the main page!</p>
        <p>Categories:</p>
        {Object.values(categories).map((category) => (
          <div>
            <a href={category.path} > {category.name} </a>
          </div>
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