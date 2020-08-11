import React from 'react';
import { Link } from 'react-router-dom'

import LogoImg from '../../assets/logo.svg';
import BackIcon from '../../assets/icons/back.svg';

import './styles.css';

function PageHeader({ title, children }) {

  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={BackIcon} alt="Voltar" />
        </Link>
        <img src={LogoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>

    </header>
  )
}

export default PageHeader;