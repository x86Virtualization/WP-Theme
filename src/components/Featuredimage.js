import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Featuredimage extends Component {
  render() {
    const { post } = this.props;

    let img = null;

    if (post.featuredImageSrc !== undefined && post.featuredImageSrc.length > 0) {
      img = <img src={post.featuredImageSrc} alt={post.title.rendered} />;
    }

    return (
      <p>
        {img}
      </p>
    );
  }
}

Featuredimage.propTypes = {
  post: PropTypes.shape.isRequired,
};

export default Featuredimage;
