import React, { useState, useEffect} from 'react';

const OneOperation = ({ operation }) => {
  const [showOpDetail, setShowOpDetail] = useState(false);
  const toggleClick = (event) => {
    event.preventDefault();
    setShowOpDetail(!showOpDetail);
  };
  const comment = showOpDetail ? 
    (
      <div className="oneOperation__element oneOperation__element--below">
        <span >{operation.comment}</span> 
        <img className="oneOperation__right" src="https://img.icons8.com/fluent-systems-regular/24/000000/settings.png"/>
      </div>
    ):
    <a href="/" onClick={toggleClick}><img  className="oneOperation__right" src="https://img.icons8.com/fluent-systems-regular/24/000000/button2.png"/></a>;
  return (
    <div className="oneOperation">
      <span className="oneOperation__element">{operation.date}</span>
      <span className="oneOperation__element">{operation.quantity}</span>
      <span className="oneOperation__element">{operation.product_name}</span>
      {comment}
    </div>
  );
};


export default OneOperation;
