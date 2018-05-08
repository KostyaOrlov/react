import React, { Component } from 'react';
import firebase from 'firebase';

class Comment extends Component {

    removeComment(commentId, event) {
        event.preventDefault();
        if (window.confirm ('Are you really want to remove this awesome comment?')) {
            firebase.database().ref().child('comments').child(commentId).remove();
        }
        
    }

    render() {
        return (
            <div>
                <li className="comments-item">
                    <h3>
                         {this.props.author}
                        <a href="#" onClick={this.removeComment.bind(this, this.props.id)}>delete</a>
                    </h3>
                    <p>{this.props.text}</p>
                </li>
            </div>
        );
    }
}

export default Comment;