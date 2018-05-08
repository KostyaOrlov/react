import React, { Component } from 'react';
import CommentsList from './components/CommentsList';
import CommentsForm from './components/CommentsForm';
import './App.css';
import firebase from 'firebase';

var config = {
  apiKey : 'AIzaSyBNrA0j96CqWKz9w9H5RMKrN4VzSlZYOeA',
  databaseURL: 'https://my-project-2018-193619.firebaseio.com/'
}

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="comments-box">
        <CommentsForm />
        <CommentsList />
      </div>
    );
  }
}

export default App;
