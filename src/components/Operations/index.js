/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import OperationType from './OperationType';
import Field from './Field';
import CommentField from './CommentField';
import SelectField from './SelectField';
import VarietyField from './VarietyField';
import Confirm from './Confirm';

import './style.scss';

const Operations = ({
  data,
  dataBoard,
  operation,
  changeOperationsValue,
  changeOperationsBoardValue,
  resetOperationsValue,
  getUserBoards,
  isLogged,
  submitUserOperation,
}) => {
  useEffect(() => {
    if (isLogged) {
      getUserBoards();
    }
  }, []);

  const handleOnChange = (event) => {
    changeOperationsValue(event.target.value, event.target.name);
    changeOperationsValue(event.target.value, event.target.name);
    console.log('name', event.target);
  };

  const handleOnChangeBoard = (event) => {
    changeOperationsBoardValue(event.target.value, event.target.name, event.target.id);
    console.log('name', event.target.name, event.target.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    submitUserOperation();
    resetOperationsValue();
  };

  console.log('USERBOARD', operation.userBoards);

  return (
    <div className="operation">
      <h2 className="operation__title">Opérations</h2>
      <OperationType name="operationType" handleOpType={handleOnChange} />

      {operation.operationType === 'Créer une planche' && (
        <form action="post" onSubmit={handleSubmit}>
          <Field name="boardName" onChange={handleOnChange} value={operation.boardName} placeholder="Nom de votre planche..." />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Plus de détails..." />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Labourer' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={operation.userBoards} placeholder="Quelle planche labourer ?" />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Plus de détails..." />
          <Confirm onSubmit={handleSubmit} />
        </form>
      )}
      {operation.operationType === 'Semer' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={operation.userBoards} placeholder="Sur quelle planche ?" />
          <SelectField name="boardFamily" onChange={handleOnChange} data={data.family} placeholder="De quelle famille ?" />
          <VarietyField name="boardVariety" onChange={handleOnChange} data={data.variety} target={operation.boardFamily} placeholder="De quelle variété ?" />
          <Confirm onSubmit={handleSubmit} />
        </form>
      )}
      {operation.operationType === 'Arroser' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={operation.userBoards} placeholder="Quelle planche arroser ?" />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Plus de détails..." />
          <Confirm onSubmit={handleSubmit} />
        </form>
      )}
      {operation.operationType === 'Fertiliser' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={operation.userBoards} placeholder="Quelle planche fertiliser ?" />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Avec quel fertilisant ?" />
          <Confirm onSubmit={handleSubmit} />
        </form>
      )}
      {operation.operationType === 'Traiter' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={operation.userBoards} placeholder="Quelle planche traiter ?" />
          <Field name="product" onChange={handleOnChange} value={operation.product} placeholder="Avec quel produit ?" />
          <Field name="quantity" onChange={handleOnChange} value={operation.quantity} placeholder="Quelle quantité ?" />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Plus de détails..." />
          <Confirm onSubmit={handleSubmit} />
        </form>
      )}
      {operation.operationType === 'Désherber' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={operation.userBoards} placeholder="Quelle planche désherber ?" />
          <CommentField name="comment" onChange={handleOnChange} placeholder="De quelle manière ?" />
          <Confirm onSubmit={handleSubmit} />
        </form>
      )}
      {operation.operationType === 'Récolter' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={operation.userBoards} placeholder="Quelle planche récolter ?" />
          <Field name="quantity" onChange={handleOnChange} value={operation.quantity} placeholder="Quelle quantité ? (en kg)" />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Plus de détails..." />
          <Confirm onSubmit={handleSubmit} />
        </form>
      )}
      {operation.operationType === 'Supprimer une planche' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChangeBoard} data={operation.userBoards} placeholder="Quelle planche supprimer ?" />
          <Confirm onSubmit={handleSubmit} />
        </form>
      )}
    </div>
  );
};

Operations.propTypes = {
  operation: PropTypes.object.isRequired,
  getUserBoards: PropTypes.func.isRequired,
  changeOperationsValue: PropTypes.func.isRequired,
  changeOperationsBoardValue: PropTypes.func.isRequired,
  submitUserOperation: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Operations;
