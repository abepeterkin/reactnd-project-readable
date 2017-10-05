import React, {Component} from 'react'

class CategoryPage extends Component {

  state = {

  }
  
  componentDidMount() {

  }

  render () {
    const category = this.props.match.params.category
    return (
      <p>Category: {category}</p>
    )
  }
}

export default CategoryPage