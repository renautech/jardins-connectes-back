import React from 'react';

const Operation = ({operation}) => {

  return (
    <div className="operationList-operation">
      <span className="operationList-operation-element">{operation.date}</span>
      <span className="operationList-operation-element">{operation.quantity}</span>
      <span className="operationList-operation-element">{operation.product_name}</span>
      <span className="operationList-operation-element">{operation.comment}</span>
    </div>
  );
};

export default Operation;
