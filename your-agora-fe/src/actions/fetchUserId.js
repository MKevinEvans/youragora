import $ from 'jquery'
// import { browserHistory } from 'react-router'

export default function fetchUserId(){

  return function(dispatch){
    dispatch({type: 'FETCHING_USER'})
    $.ajax({
      url: "http://localhost:3000/users",
      type: "GET",
      headers: {authorization: localStorage.getItem('jwt')}
    }).done(function(data){
      dispatch({type: 'FETCH_USER', currentUserId: data.id}) // NOTE: current_user is from the API/Ruby
    })
  }
}