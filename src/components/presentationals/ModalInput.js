import React from 'react';
import { Input } from 'semantic-ui-react'
import '../../styles/modal-input.scss';

export default function ModalInput({ label, placeholder, type }) {
  return (
    <div className="modal-input-container">
      <label>{label}</label>
      <Input placeholder={placeholder} type={type} />
    </div>
  );
};