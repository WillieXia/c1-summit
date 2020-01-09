import React from 'react'
import './App.js'

class Search extends React.Component {
  state = {}

  change = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='search'
          placeholder={this.state.placeholder}
        ></input>
      </form>
    )
  }
}

export default Search
