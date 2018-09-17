import React, { Component } from 'react';
import { render } from 'react-dom'; // importing render from ReactDOM
import logo from './logo.svg';
import './App.css';

class App extends Component {
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

    const posts = ( this.state.posts[0] !== undefined )?<Posts posts={this.state.posts} />:null;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><a href="/">Welcome to x86 Virtualization</a></h1>
        </header>
        <div id="content">

           <Switch>

               <Route exact path={CelestialSettings.path} component={Posts} /> // the root path

           </Switch>

       </div>
      </div>
    );
  }
}

class Posts extends Component {
  render(){

    console.log(this.props.posts);

    const listPosts = this.props.posts.map((post) =>
      <li key={post.id}><h3><a href={post.slug}>{post.title.rendered}</a></h3><p className="body" dangerouslySetInnerHTML={{__html: post.excerpt.rendered }}></p></li>
    );

    return (
      <ul>
        {listPosts}
      </ul>
    );
  }
}

// React Router

const routes = (

   <Router>

       <Route path="/" component={App} />

   </Router>

);

render( // rendering to the DOM by replacing #page with the root React component

   (routes), document.getElementById('page') // rendering the route

);

export default App;
