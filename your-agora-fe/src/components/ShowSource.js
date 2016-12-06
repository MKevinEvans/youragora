import React from 'react'
import {Link} from 'react-router';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getNext } from '../actions/getNext'
import { browserHistory } from 'react-router'


function showSource(props){
  if( props.currentUserId != null ){
    var test = <Link to="mainarticle/source" >Show Source</Link>
  }
  else {
    var test = "Make an account"
  }

  function handleClick(){
    props.getNext(props.mainArticle, props.articles)
    browserHistory.push('/mainTeaser')
  }

  return(
    <div>
      {test}
      <button onClick={handleClick.bind(props)}> Next </button>  
    </div>
  )
}


function mapStateToProps(state){
  return {
    currentUserId: state.currentUser.userId, 
    mainArticle: state.mainArticle,
    articles: state.articles.fetched
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getNext}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(showSource)