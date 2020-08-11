import React from 'react';
import './styles.css'
import WhatsappIcon from '../../assets/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/26559579?s=460&v=4" alt="Natan Merelles" />
        <div>
          <strong>Natan Merelles</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Entusiasta da Programação.
            <br />
        Apaixonado por novas tecnologias.
          </p>

      <footer>
        <p>
          Preço/Hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={WhatsappIcon} alt="Whatsapp" />
          Entrar em contato
            </button>
      </footer>
    </article>
  )
}


export default TeacherItem;