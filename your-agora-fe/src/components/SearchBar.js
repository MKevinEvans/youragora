import React, { Component } from 'react'
import { getArticles } from '../actions/getArticles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SearchBar extends Component{

  handleClick(event){
    event.preventDefault()
    this.props.getArticles(event.target.children[1].value)
  }

  render(){

    return(

      <div >

        <form className='search-bar' onSubmit={this.handleClick.bind(this)}>
          <label htmlFor='search' className='search-bar'>Search for a topic: </label>
          <input id='search' type="text" />
          <input type='submit' disabled={this.props.fetching} className='search-bar' name='submit' value='Search'/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {fetching: state.articles.fetching}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
