import React, { Component } from 'react';
// import { render } from 'react-dom'; // importing render from ReactDOM
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      author: null
    };
  }

  componentDidMount() {
    fetch('http://x86virtualization.com/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {

    const posts = ( this.state.posts[0] !== undefined )?<Posts posts={this.state.posts} />:null;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><a href="/">Welcome to x86 Virtualization</a></h1>
        </header>
        <div id="content">
          <h2>Recently Published Blog Posts</h2>
          {posts}
       </div>
      </div>
    );
  }
}

class Posts extends Component {
  render(){

    const listPosts = this.props.posts.map((post) =>
      <li key={post.id}>
        <h3>
          <a href={post.slug}>{post.title.rendered}</a>
        </h3>
        <p className="details">
          <div>Published: <span dangerouslySetInnerHTML={{__html: post.date }}></span></div>
          <Author post={post} />
        </p>
        <p className="body" dangerouslySetInnerHTML={{__html: post.excerpt.rendered }}></p>
      </li>
    );

    return (
      <ul>
        {listPosts}
      </ul>
    );
  }
}

class Author extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: null
    };
  }

  componentDidMount() {
    // console.log(this.props.post._links.author[0].href);
    /* TODO: Adjust for multiple Authors */
    fetch(this.props.post._links.author[0].href)
      .then(response => response.json())
      .then(data => this.setState({ author: data }));
  }

  render(){

    const author = ( this.state.author !== null )?<div><span>By: </span><span key={this.state.author.id}>{this.state.author.name}</span></div>:null;

    return(
      <span>
        {author}
      </span>
      );
  }
}

export default App;
