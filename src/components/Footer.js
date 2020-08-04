import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer 
        className="footer" 
        style={{ 
          borderTop: '2px solid lightgray',
          paddingBottom: '5%'
        }}
      >
        <div className="content has-text-centered">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li style={{ marginLeft: '3%', fontWeight: 600 }}>
                      DE INTERÉS
                    </li>
                    <li>
                      <Link to="/" className="navbar-item" style={{ color: '#00AFDC' }}>
                        Política de privacidad
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#00AFDC' }}
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li style={{ marginLeft: '3%', fontWeight: 600 }}>
                      SÍGUENOS
                    </li>
                    <li>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <a title="instagram" href="https://instagram.com">
                          <img
                            src={instagram}
                            alt="Instagram"
                            style={{ width: '1em', height: '1em', }}
                          />
                        </a>
                        <Link className="navbar-item" to="/blog" style={{ color: '#00AFDC' }}>
                          Instagram
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <a title="facebook" href="https://facebook.com">
                          <img
                            src={facebook}
                            alt="Facebook"
                            style={{ width: '1em', height: '1em' }}
                          />
                        </a>
                        <Link className="navbar-item" to="/contact" style={{ color: '#00AFDC' }}>
                          Facebook
                        </Link>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <ul className="menu-list">
                  <li style={{ marginLeft: '3%', fontWeight: 600 }}>
                    SUSCRÍBETE A NUESTRO NEWSLETTER
                  </li>
                </ul>
                <p 
                  style={{
                    color: 'black',
                    opacity: 0.75,
                    textAlign: 'initial',
                    marginLeft: '11%'
                  }}
                >
                  Te contamos de nuevos parqueaderos y oportunidades de negocio
                </p>
                {/* <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
