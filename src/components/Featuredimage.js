import React, { Component } from 'react';

class Featuredimage extends Component {

  render(){

    const img = ( this.props.post.author_name !== undefined )?<span>By: {this.props.post.author_name}</span>:null;

    return(
      <p>
        {img}
      </p>
      );
  }
}

export default Featuredimage;
