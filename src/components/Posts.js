import React, { Component } from 'react';

import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('http://x86virtualization.com/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const { posts } = this.state;

    const listPosts = posts.map(post => <Post key={post.id} post={post} />);

    return (
      <div className="Posts">
        <h2>Recently Published Blog Posts</h2>
        <ul>
          {listPosts}
        </ul>
      </div>
    );
  }
}

export default Posts;
