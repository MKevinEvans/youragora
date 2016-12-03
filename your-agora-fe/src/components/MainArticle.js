import React from 'react'
import { connect } from 'react-redux'

function MainArticle (props){

  return (
    <div>
      <h1>{props.title}</h1>
      <div style={{"textAlign": "left"}} dangerouslySetInnerHTML={{__html: props.content}} />
    </div>
  )
}

function mapStateToProps(state){
  // TODO: Right now this is only showing the first article from all the articles we are gathering. eventually we want to fetch one article display it and fetch the rest in the background.
  return state.fetchedArticles[0]
}

export default connect(mapStateToProps)(MainArticle)
