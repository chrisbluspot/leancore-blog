import React from 'react'
import { Link } from 'gatsby'

const styles = {
  buttonText: { 
    height: '75%',
    fontFamily: 'Open Sans', 
    fontSize: 14, 
    fontWeight: 600, 
    color: '#00253D', 
    letterSpacing: '0.2em',
    paddingLeft: 30,
    paddingRight: 30,
  }
}

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          width: '100%',
        }}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container" style={{ paddingTop: 20 }}>
           <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              
            </div>
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/" style={styles.buttonText}>
                 LEAN CORE
              </Link>
              <Link className="navbar-item" to="/blog" style={styles.buttonText} style={{
                ...styles.buttonText,
                borderRadius: 25,
                justifyContent: 'center',
                border: '2px solid white',
              }}>
                BLOG
              </Link>
              <Link className="navbar-item" to="https://leancore.co/specification/" style={styles.buttonText}>
                ABOUT
              </Link>
              <Link className="navbar-item" to="/contact" style={{
                ...styles.buttonText,
                borderRadius: 25,
                justifyContent: 'center',
                backgroundColor: 'white',
              }}>
                TRY IT
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
