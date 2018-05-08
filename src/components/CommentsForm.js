import React, { Component } from 'react';
import firebase from 'firebase';

class CommentsForm extends Component {

    submitForm(event) {
        event.preventDefault()
        if (this.author.value.length && this.text.value.length) {
            const comment = {
                name: this.author.value,
                text: this.text.value
            }
    
            firebase.database().ref().child('comments').push(comment).then( () => {
                this.author.value = '';
                this.text.value = '';
            })
        }

    }
        
    render() {
        return (
            <form className="comments-form" onSubmit={this.submitForm.bind(this)} >
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" ref={input => this.author = input} />
                <label htmlFor="text">Comment</label>
                <textarea name="text" id="text" ref={textarea => this.text = textarea}></textarea>
                <input type="submit" value="post commit"/>
            </form>
           
        );
    }
}

export default CommentsForm;