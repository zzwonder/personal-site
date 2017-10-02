import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="CommentContainer">

      </div>
    );
  }
}

CommentContainer.propTypes = {
  CommentContainer: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    compentency: PropTypes.number,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

CommentContainer.defaultProps = {
  CommentContainer: [],
  categories: [],
};


export default CommentContainer;
