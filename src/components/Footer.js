import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '', width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

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
              <div className="column is-6">
                <section className="menu">
                  <ul className="menu-list">
                    <li style={{ marginLeft: '3%', fontWeight: 600 }}>
                      OF INTEREST
                    </li>
                    <li>
                      <Link to="/" className="navbar-item" style={{ color: '#00AFDC' }}>
                        Privacy policy
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
              {/* <div className="column is-4">
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
              </div> */}
              <div className="column is-6 social">
                <ul className="menu-list">
                  <li style={{ marginLeft: '3%', fontWeight: 600 }}>
                    SUBSCRIBE TO OUR NEWSLETTER
                  </li>
                  <li>
                    <form
                      onSubmit={this.handleSubmit}
                      style={{
                        marginTop: '20px',
                        marginLeft: '16px',
                      }}
                    >
                      <input
                        style={{
                          height: '50px',
                          width: this.state.width > 750 ? '300px' : '220px',
                          borderTopLeftRadius: '15px',
                          borderBottomLeftRadius: '15px',
                          border: '2px solid #707070',
                        }}
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                        placeholder="Your email"
                      />
                      <button
                        type="submit"
                        style={{
                          height: '50px',
                          width: '60px',
                          backgroundColor: '#00afdc',
                          border: '2px solid #00afdc',
                          color: 'white',
                          fontFamily: 'Open Sans',
                          fontSize: '20px',
                          borderTopRightRadius: '15px',
                          borderBottomRightRadius: '15px'
                        }}
                      >
                        {`>`}
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
