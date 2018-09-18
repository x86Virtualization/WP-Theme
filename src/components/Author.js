import React, { Component } from 'react';

class Author extends Component {

  render(){

    const author = ( this.props.post.author_name !== undefined )?<span>By: {this.props.post.author_name}</span>:null;

    return(
      <p>
        {author}
      </p>
      );
  }
}

export default Author;
