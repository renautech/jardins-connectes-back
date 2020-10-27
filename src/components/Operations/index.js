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

const Operations = ({ data, dataBoard, operation, getUserBoards, changeOperationsValue }) => {
  const handleOnChange = (event) => {
    changeOperationsValue(event.target.value, event.target.name);
    console.log('name', event.target);
  };

  return (
    <div className="operation">
      <h2 className="operation__title">Opérations</h2>
      <OperationType name="operationType" handleOpType={handleOnChange} />

      {operation.operationType === 'Créer une planche' && (
        <form action="post">
          <Field name="boardName" onChange={handleOnChange} placeholder="Nom de votre planche..." />
          <CommentField name="comment" onChange={handleOnChange} placeholder="Plus de détails..." />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Labourer' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={dataBoard} placeholder="Quelle planche labourer ?" />
          <CommentField name="comment" onChange={handleOnChange} placeholder="Plus de détails..." />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Semer' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={dataBoard} placeholder="Sur quelle planche ?" />
          <SelectField name="boardFamily" onChange={handleOnChange} data={data.family} placeholder="De quelle famille ?" />
          <VarietyField name="boardVariety" onChange={handleOnChange} data={data.variety} target={operation.boardFamily} placeholder="De quelle variété ?" />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Arroser' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={dataBoard} placeholder="Quelle planche arroser ?" />
          <CommentField name="comment" onChange={handleOnChange} placeholder="Plus de détails..." />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Fertiliser' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={dataBoard} placeholder="Quelle planche fertiliser ?" />
          <CommentField name="comment" onChange={handleOnChange} placeholder="Avec quel fertilisant ?" />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Traiter' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={dataBoard} placeholder="Quelle planche traiter ?" />
          <Field name="product" onChange={handleOnChange} placeholder="Avec quel produit ?" />
          <Field name="quantity" onChange={handleOnChange} placeholder="Quelle quantité ?" />
          <CommentField name="comment" onChange={handleOnChange} placeholder="Plus de détails..." />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Désherber' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={dataBoard} placeholder="Quelle planche désherber ?" />
          <CommentField name="comment" onChange={handleOnChange} placeholder="De quelle manière ?" />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Récolter' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={dataBoard} placeholder="Quelle planche récolter ?" />
          <Field name="quantity" onChange={handleOnChange} placeholder="Quelle quantité ? (en kg)" />
          <CommentField name="comment" onChange={handleOnChange} placeholder="Plus de détails..." />
          <Confirm />
        </form>
      )}
      {operation.operationType === 'Supprimer une planche' && (
        <form action="post">
          <SelectField name="boardName" onChange={handleOnChange} data={dataBoard} placeholder="Quelle planche supprimer ?" />
          <Confirm />
        </form>
      )}
    </div>
  );
};

Operations.propTypes = {
  operation: PropTypes.object.isRequired,
  getUserBoards: PropTypes.func.isRequired,
  changeOperationsValue: PropTypes.func.isRequired,
};

export default Operations;
