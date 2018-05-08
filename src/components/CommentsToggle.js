import React, { Component } from 'react';

class CommentsToggle extends Component {
    render() {
        return (
            <button className="button" onClick={this.props.toggleComments}>{this.props.isShow ? 'hide comments' : 'show comments'}</button>
        );
    }
}

export default CommentsToggle;