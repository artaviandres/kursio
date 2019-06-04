import React from 'react';
import { Input } from 'semantic-ui-react'
import '../../styles/modal-input.scss';

export default function ModalInput({ label, placeholder, value, type, onChange, required, margin }) {
  return (
    <div className="modal-input-container" style={{ margin }}>
      <label>{label}</label>
      <Input placeholder={placeholder} type={type} onChange={(e) => onChange(e)} required={required} value={value} />
    </div>
  );
};