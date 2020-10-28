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
  operation,
  changeOperationsValue,
  changeOperationsBoardValue,
  changeOperationsFamilyValue,
  changeOperationsVarietyValue,
  resetOperationsValue,
  resetAllOperationsValue,
  getUserBoards,
  getFamilies,
  getVarieties,
  isLogged,
  submitUserOperation,
}) => {
  useEffect(() => {
    if (isLogged) {
      getUserBoards();
      getFamilies();
      resetOperationsValue();
    }
  }, []);

  const handleOnChange = (event) => {
    changeOperationsValue(event.target.value, event.target.name);
  };

  const handleOnChangeType = (event) => {
    changeOperationsValue(event.target.value, event.target.name);
    resetOperationsValue();
  };

  const handleOnChangeFamilies = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const familyId = el.getAttribute('id');
    changeOperationsFamilyValue(event.target.value, familyId);
    getVarieties();
  };

  const handleOnChangeVarieties = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const varietyId = el.getAttribute('id');
    changeOperationsVarietyValue(event.target.value, varietyId);
  };

  const handleOnChangeBoard = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index];
    const boardId = el.getAttribute('id');
    changeOperationsBoardValue(event.target.value, boardId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    submitUserOperation();
    resetAllOperationsValue();
  };

  console.log('USERBOARD', operation.userBoards);

  return (
    <div className="operation">
      <h2 className="operation__title">Opérations</h2>
      <OperationType name="operationType" handleOpType={handleOnChangeType} value={operation.operationType} />

      {operation.operationType === 'Créer une planche' && (
        <form action="post" onSubmit={handleSubmit}>
          <Field name="boardName" onChange={handleOnChange} value={operation.boardName} placeholder="Nom de votre planche..." />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Plus de détails..." />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Labourer' && (
        <form action="post" onSubmit={handleSubmit}>
          <SelectField name="boardName" onChange={handleOnChangeBoard} data={operation.userBoards} placeholder="Quelle planche labourer ?" />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Plus de détails..." />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Semer' && (
        <form action="post" onSubmit={handleSubmit}>
          <SelectField name="boardName" onChange={handleOnChangeBoard} data={operation.userBoards} placeholder="Sur quelle planche ?" />
          <SelectField name="boardFamily" onChange={handleOnChangeFamilies} data={operation.families} placeholder="De quelle famille ?" />
          <VarietyField name="boardVariety" onChange={handleOnChangeVarieties} data={operation.varieties} target={operation.boardFamily} placeholder="De quelle variété ?" />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Arroser' && (
        <form action="post" onSubmit={handleSubmit}>
          <SelectField name="boardName" onChange={handleOnChangeBoard} data={operation.userBoards} placeholder="Quelle planche arroser ?" />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Plus de détails..." />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Fertiliser' && (
        <form action="post" onSubmit={handleSubmit}>
          <SelectField name="boardName" onChange={handleOnChangeBoard} data={operation.userBoards} placeholder="Quelle planche fertiliser ?" />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Avec quel fertilisant ?" />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Traiter' && (
        <form action="post" onSubmit={handleSubmit}>
          <SelectField name="boardName" onChange={handleOnChangeBoard} data={operation.userBoards} placeholder="Quelle planche traiter ?" />
          <Field name="product" onChange={handleOnChange} value={operation.product} placeholder="Avec quel produit ?" />
          <Field name="quantity" onChange={handleOnChange} value={operation.quantity} placeholder="Quelle quantité ?" />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Plus de détails..." />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Désherber' && (
        <form action="post" onSubmit={handleSubmit}>
          <SelectField name="boardName" onChange={handleOnChangeBoard} data={operation.userBoards} placeholder="Quelle planche désherber ?" />
          <CommentField name="comment" onChange={handleOnChange} placeholder="De quelle manière ?" />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Récolter' && (
        <form action="post" onSubmit={handleSubmit}>
          <SelectField name="boardName" onChange={handleOnChangeBoard} data={operation.userBoards} placeholder="Quelle planche récolter ?" />
          <Field name="quantity" onChange={handleOnChange} value={operation.quantity} placeholder="Quelle quantité ? (en kg)" />
          <CommentField name="comment" onChange={handleOnChange} value={operation.comment} placeholder="Plus de détails..." />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Supprimer une planche' && (
        <form action="post" onSubmit={handleSubmit}>
          <SelectField name="boardName" onChange={handleOnChangeBoard} data={operation.userBoards} placeholder="Quelle planche supprimer ?" />
          <Confirm />
        </form>
      )}
    </div>
  );
};

Operations.propTypes = {
  operation: PropTypes.object.isRequired,
  getUserBoards: PropTypes.func.isRequired,
  getFamilies: PropTypes.func.isRequired,
  getVarieties: PropTypes.func.isRequired,
  changeOperationsValue: PropTypes.func.isRequired,
  changeOperationsBoardValue: PropTypes.func.isRequired,
  changeOperationsFamilyValue: PropTypes.func.isRequired,
  changeOperationsVarietyValue: PropTypes.func.isRequired,
  resetOperationsValue: PropTypes.func.isRequired,
  resetAllOperationsValue: PropTypes.func.isRequired,
  submitUserOperation: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Operations;
