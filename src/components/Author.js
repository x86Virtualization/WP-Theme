import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Author extends Component {
  render() {
    const { post } = this.props;

    const author = (post.authorName !== undefined)
      ? (
        <span>
        By:
          {post.authorName}
        </span>
      ) : null;

    return (
      <p>{author}</p>
    );
  }
}

Author.propTypes = {
  post: PropTypes.shape.isRequired,
};

export default Author;
