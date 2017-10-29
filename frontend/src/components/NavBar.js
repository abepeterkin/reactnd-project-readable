import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategories())
  }

  render () {
    const { categories } = this.props
    return (
      <Menu>
        <Menu.Item header > Readable </Menu.Item>
        {Object.values(categories).map((category) => (
          <Menu.Item key={category.name} name={category.name}>
            <a href={`/${category.path}`} > {category.name} </a>
          </Menu.Item>
        ))}
      </Menu>
    )
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

export default connect(
  mapStateToProps
)(NavBar)