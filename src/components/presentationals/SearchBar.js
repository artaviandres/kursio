import React from 'react';
import { Trans, useTranslation } from "react-i18next";
import { FaSearch, FaBars } from "react-icons/fa";
import '../../styles/search-bar.scss';
import { STYLES } from '../../const';

export default function SearchBar() {
  const { t } = useTranslation();
  return (
    <div className="search-bar-container">
      <div className="search-bar-categories">
        <FaBars />
        <Trans i18nKey="search_bar_category" />
      </div>
      <div className="search-bar-input">
        <input type="text" placeholder={t('search_bar_placeholder')} />
      </div>
      <div className="search-bar-button">
        <FaSearch color={STYLES["$white"]} size={18} />
      </div>
    </div>
  );
};