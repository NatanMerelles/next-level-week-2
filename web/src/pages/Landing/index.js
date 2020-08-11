import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo.svg';
import LandingImg from '../../assets/landing.svg';
import StudyIcon from '../../assets/icons/study.svg';
import GiveClassesIcon from '../../assets/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/icons/purple-heart.svg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="Logo" />
          <h2>Plataforma de estudos online</h2>
        </div>

        <img
          src={LandingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to='/study' className="study">
            <img src={StudyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to='/give-classes' className="give-classes">
            <img src={GiveClassesIcon} alt="Ensinar" />
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 0 conexoes realizadas <img src={PurpleHeartIcon} alt="" />
        </span>
      </div>
    </div>
  )
}

export default Landing;