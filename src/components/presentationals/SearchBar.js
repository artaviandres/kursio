import React, { useEffect } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { IoMdClose } from 'react-icons/io';
import SearchResults from './SearchResults';
import '../../styles/search-bar.scss';

export default function SearchBar({ onClose, onChange, searchText }) {
  const { t } = useTranslation();
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
  });
  const escFunction = (event) => {
    if(event.keyCode === 27) {
      onClose();
    }
  }
  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <input placeholder="Search courses, teachers or categories." onChange={onChange} />
        <a className="search-bar-close" onClick={() => onClose()}>
          <IoMdClose size={42} />
        </a>
        {searchText ? <SearchResults /> : null}
      </div>
    </div>
  );
};