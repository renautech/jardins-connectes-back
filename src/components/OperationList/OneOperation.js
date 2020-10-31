import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

const OneOperation = ({ operation }) => {
  const [showOpDetail, setShowOpDetail] = useState(false);
  const toggleClick = (event) => {
    event.preventDefault();
    setShowOpDetail(!showOpDetail);
  };

  const date = format(
    parseISO(operation.date),
    'dd/MM/yyyy',
  );

  const comment = showOpDetail
    ? (
      <div className="oneOperation__element oneOperation__element--below">
        <span>{operation.comment}</span>
        <a href="/" onClick={toggleClick}>
          <img className="oneOperation__right" alt="légume" src="https://img.icons8.com/fluent-systems-regular/24/000000/settings.png"/>
        </a>
      </div>
    )
    : (
      <a href="/" onClick={toggleClick}>
        <img className="oneOperation__right" alt="options" src="https://img.icons8.com/fluent-systems-regular/24/000000/button2.png"/>
      </a>
    );
  return (
    <div className="oneOperation">
      <span className="oneOperation__element">Date : {date}</span>
      <span className="oneOperation__element">{operation.id}</span>
      {/* <span className="oneOperation__element">{operation.operation_type_id}</span> */}
      <span className="oneOperation__element">{operation.product_name}</span>
      {comment}
    </div>
  );
};

OneOperation.propTypes = {
  operation: PropTypes.object.isRequired,
};

export default OneOperation;
