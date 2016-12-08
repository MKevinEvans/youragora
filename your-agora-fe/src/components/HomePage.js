import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import SearchBar from './articles/SearchBar'
import SignOut from './users/SignOut'
import fetchUserId from '../actions/fetchUserId'
import { bindActionCreators } from 'redux'


class HomePage extends Component{
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    if(this.props.id === undefined && localStorage.getItem('jwt') != null){
      this.props.fetchUserId()
    }
  }

  render(){
    debugger
    var loggedIn;
  
    if (localStorage.jwt === undefined){
      loggedIn =
      <div className="sign-links-homepage">
        <Link id="sign-in-link" to="/signin" >Sign In</Link>
        <strong>|</strong>
        <Link id="sign-up-link" to="/signup" >Sign Up</Link>
      </div>
    } else {
      loggedIn = <div className="sign-links"> <span id="welcome-message"> Welcome back {this.props.userName}! </span> <br /> <SignOut /> </div>
    }
      return (
        <div className="HomePage">
          {loggedIn}
          <div id="homepage-logo">
            <img role="presentation" src="/images/youragora-logo.png" />
          </div>
          <div id="search-bar-homepage-container">
            <SearchBar idProps={'search-bar-homepage'}/>
          </div>
        </div>
      )
  }
}

function mapStateToProps(state){
  return {userName: state.currentUser.userName,
          id: state.currentUser.UserId}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchUserId }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
