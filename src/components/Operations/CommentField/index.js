/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const CommentField = ({ onChange, placeholder }) => {
  return (
    <div className="commentfield">
      <textarea className="commentfield__input" onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

CommentField.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CommentField;
