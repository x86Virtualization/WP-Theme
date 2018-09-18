import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Author from './Author';
import Featuredimage from './Featuredimage';


class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <li key={post.id}>
        <h3>
          <a href={post.slug}>{post.title.rendered}</a>
        </h3>
        <Featuredimage post={post} />
        <div className="details">
          <p>
            Published:
            <span dangerouslySetInnerHTML={{ __html: post.date }} />
          </p>
          <Author post={post} />
        </div>
        <p className="body" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </li>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape.isRequired,
};

export default Post;
