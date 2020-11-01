import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

const OneOperation = ({
  operation,
  operationTypes,
  userBoards,
  deleteOperation,
}) => {
  const [showOpDetail, setShowOpDetail] = useState(false);

  const toggleClick = (event) => {
    event.preventDefault();
    setShowOpDetail(!showOpDetail);
  };

  const toggleDelete = (event) => {
    event.preventDefault();
    deleteOperation(operation.id);
  };

  const date = format(
    parseISO(operation.date),
    'dd/MM/yyyy   HH:mm',
  );

  const foundBoard = userBoards.find((board) => board.id === operation.board_id);

  const foundType = operationTypes.find((type) => type.id === operation.operation_type_id);

  // if (foundType.id === 1) {
  //   const typeImage = 'https://www.flaticon.com/svg/static/icons/svg/628/628647.svg';
  // }
  // if (foundType.id === 2) {
  //   const typeImage = 'https://www.flaticon.com/svg/static/icons/svg/735/735044.svg';
  // }
  // if (foundType.id === 3) {
  //   const typeImage = 'https://www.flaticon.com/svg/static/icons/svg/3628/3628681.svg';
  // }
  // if (foundType.id === 4) {
  //   const typeImage = 'https://www.flaticon.com/svg/static/icons/svg/67/67739.svg';
  // }
  // if (foundType.id === 5) {
  //   const typeImage = 'https://www.flaticon.com/svg/static/icons/svg/2674/2674324.svg';
  // }
  // if (foundType.id === 6) {
  //   const typeImage = 'https://www.flaticon.com/svg/static/icons/svg/2965/2965775.svg';
  // }
  // if (foundType.id === 7) {
  //   const typeImage = 'https://www.flaticon.com/svg/static/icons/svg/2950/2950521.svg';
  // }
  // if (foundType.id === 8) {
  //   const typeImage = 'https://www.flaticon.com/svg/static/icons/svg/2230/2230512.svg';
  // }
  // if (foundType.id === 9) {
  //   const typeImage = 'https://www.flaticon.com/svg/static/icons/svg/3096/3096687.svg';
  // }

  const comment = showOpDetail
    ? (
      <div className="oneOperation__element oneOperation__element--below">
        <span className="oneOperation__element">{foundBoard.name}</span>
        <span className="oneOperation__element">{operation.product_name}</span>
        <span className="oneOperation__element">{operation.quantity}</span>
        <a href="/" onClick={toggleClick}>
          <img className="oneOperation__right" alt="légume" src="https://img.icons8.com/fluent-systems-regular/24/000000/button2.png" />
        </a>
        <a href="/" onClick={toggleDelete}>
          <img className="oneOperation__right__img" alt="croix" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828665.svg" />
        </a>
      </div>
    )
    : (
      <a href="/" onClick={toggleClick}>
        <img className="oneOperation__right" alt="options" src="https://img.icons8.com/fluent-systems-regular/24/000000/button2.png" />
      </a>
    );
  return (
    <div className="oneOperation">
      <img className="oneOperation__element__img" src="https://www.flaticon.com/svg/static/icons/svg/735/735044.svg" alt="logo opération" />
      <span className="oneOperation__element__title">{foundType.description}</span>
      <span className="oneOperation__element__title">{date}</span>
      <span className="oneOperation__element__title">{operation.comment}</span>
      {comment}
    </div>
  );
};

OneOperation.propTypes = {
  operation: PropTypes.object.isRequired,
  operationTypes: PropTypes.array.isRequired,
  userBoards: PropTypes.array.isRequired,
  deleteOperation: PropTypes.func.isRequired,
};

export default OneOperation;
