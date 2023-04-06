import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-user-info">
          <div className="footer-options">
            <ul className="footer-option-list">
              <li>Trabaja con nosotros</li>
              <li>Términos y condiciones</li>
              <li>Cómo cuidamos tu privacidad</li>
              <li>Accesibilidad</li>
              <li>Ayuda / PQR</li>
              <li>www.sic.gov.co</li>
            </ul>
          </div>
          <div className="footer-address">
            <span>Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
            <span>Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
          </div>
        </div>
        <div className="footer-image-section">
          <div className="footer-img">
            <img src="./img/footer-img/sic.png.svg" alt="" />
              <img src="./img/footer-img/pum.png.svg" alt="" />
              </div>
          </div>
        </div>
    </footer>
  )
}

export { Footer }