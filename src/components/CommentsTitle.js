import React, { Component } from 'react';

class CommentsTitle extends Component {
    getCommentsTitle(commentsCounter) {
        if (commentsCounter === 0) {
            return 'No comments yet'
        } else if (commentsCounter === 1) {
            return '1 comment'
        } else {
            return `${commentsCounter} comments`;
        }
    }

    render() {
        return (
            <div className="comments-title">{this.getCommentsTitle(this.props.counter)}</div>
        );
    }
}

export default CommentsTitle;