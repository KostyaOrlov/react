import React, { Component } from 'react';
import Comment from './Comment'
import CommentsTitle from './CommentsTitle';
import CommentsToggle from './CommentsToggle';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import firebase from 'firebase';




class CommentsList extends Component {
    constructor (props) {
        super()
        this.state = {
            showComments: true,
            comments: []

        }
        this.toggleShowComments = this.toggleShowComments.bind(this)
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child('comments'),'comments');
    }
    

    toggleShowComments () {
        this.setState({
            showComments: !this.state.showComments
        })
    }

    render() {            
        const commentsCount = this.state.comments.length;
        let commentsList;
        if (commentsCount > 0 && this.state.showComments) {
            commentsList = <ul className="comments-list">
            {
                this.state.comments.map( (comment, index) => {
                    return <Comment key={index} author={comment.name} text={comment.text} id={comment['.key']} />
            })
            }
                
            </ul>
        }
        return (
            <div className="comments-body">
                <CommentsTitle counter={commentsCount}/>
                <CommentsToggle toggleComments={this.toggleShowComments} isShow={this.state.showComments} />
                {commentsList}
            </div>
        );
    }
}

ReactMixin(CommentsList.prototype, ReactFireMixin);

export default CommentsList;