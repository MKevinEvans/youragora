import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import  readStashed  from '../../actions/readStashed'

function ReadStashedButton(props){

  function handleClick(){
    window.scrollTo(0,0)
    props.readStashed(props.article)
    browserHistory.push(`/articles/random/main`)
  }

  return (
    <a href='#' onClick={handleClick.bind(props)}>{props.title}</a>
  )
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({readStashed}, dispatch)
}

export default connect(null, mapDispatchToProps)(ReadStashedButton)
