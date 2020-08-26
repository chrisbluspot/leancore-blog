import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { navigate } from 'gatsby-link'
import Modal from 'react-modal'
// components
import Layout from '../components/Layout'
// hooks
import useWindowSize from '../hooks/useWindowSize'
// images
import logo from '../img/logo.png'
import blueCubes from '../img/new-header@2x.png'
import whiteCubes from '../img/white-cubes@2x.png'
import cellphone from '../img/cellphone.jpg'
import cloud from '../img/Cloud@2x.png'
import qrImage from '../img/Grupo-377@2x.png'
import facial from '../img/Grupo-370@2x.png'
import crypto from '../img/Grupo-371@2x.png'
import loan from '../img/Grupo-372@2x.png'
import card from '../img/card@2x.png'
import savings from '../img/Grupo-373@2x.png'
import fraud from '../img/Grupo-374@2x.png'
import layer from '../img/Grupo-375@2x.png'
import coin from '../img/coin.png'
import userImage from '../img/pexels@2x.jpg'
import pcCard from '../img/pexels-card@2x.jpg'

export const IndexPageTemplate = ({ size }) => {
  const [modalOpened, setModalOpened] = useState(false)
  const [elemZIndex, setElemZIndex] = useState(2)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleOpenModal = () => {
    setElemZIndex(-1)
    setModalOpened(true)
  }

  const handleCloseModal = () => {
    setElemZIndex(2)
    setModalOpened(false)
  }

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'isValidated': false,
        'name': contactForm.name,
        'email': contactForm.email,
        'message': contactForm.message
      }),
    })
      .then(() => handleCloseModal())
      .catch((error) => alert(error))
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setContactForm({
      ...contactForm,
      [name]: value
    })
  }

  return (
    <div>
      <Modal
        isOpen={modalOpened}
        style={{
          content: {
            borderRadius: '25px',
            backgroundImage: 'linear-gradient( #A7EDFF, #E1F9FF)',
            height: '510px',
            width: '900px',
            marginTop: '40px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }
        }}
      >
        <section>
          <div>
            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <h1
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: '40px',
                    fontWeight: 600,
                    color: '#00253D'
                  }}
                >
                  Contact us
                </h1>
                <button
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#00afdc',
                    border: '2px solid #00afdc',
                    color: 'white',
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                  }}
                  onClick={handleCloseModal}
                >
                  X
                </button>
              </div>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label 
                    className="label"
                    htmlFor={'name'}
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#00253D'
                    }}
                  >
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label 
                    className="label"
                    htmlFor={'email'}
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#00253D'
                    }}
                  >
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label 
                    className="label"
                    htmlFor={'message'}
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#00253D'
                    }}
                  >
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button
                    type="submit"
                    style={{
                      borderRadius: 25,
                      justifyContent: 'center',
                      border: '2px solid #00afdc',
                      backgroundColor: '#00afdc',
                      color: 'white',
                      padding: '2px 40px',
                      width: '162px',
                      fontFamily: 'Open Sans',
                      fontSize: '20px'
                    }}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Modal> 
      <div
        className="full-width-image margin-top-0"
        style={{
          // backgroundImage: `url(${
          //   !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          // })`,
          backgroundImage: `linear-gradient(30deg, #A7EDFF, #E1F9FF)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
          width: '100vw',
          height: '660px',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              zIndex: elemZIndex,
              marginTop: '65px',
              display: size.width < 750 ? 'none' : 'block',
            }}
          >
            <img src={blueCubes} alt="Blue cubes" style={{ width: '1300px', height: '650px' }} />
          </div>
          <div
            style={{
              position: 'absolute',
              zIndex: elemZIndex - 1,
              marginTop: '5px',
              display: size.width < 750 ? 'none' : 'block',
            }}
          >
            <img src={whiteCubes} alt="White cubes" style={{ width: '1300px', height: '650px' }} />
          </div>
          <div
            style={{
              width: size.width >= 850 ? '750px' : '300px',
              marginTop: size.width >= 750 ? '294px' : '250px',
              display: 'flex',
              flexDirection: size.width >= 750 ? 'row' : 'column',
              //paddingLeft: size.width >= 1920 ? '261.8px' : size.width >= 992 ? '60px' : '0px',
            }}
          >
            <img 
              src={logo}
              alt="Lean Core logo"
              style={{
                width: '209.4px',
                height: '57.27px',
                alignSelf: 'center'
              }}
            />
            <p
              style={{
                fontFamily: 'Open Sans',
                fontWeight: 200,
                fontStyle: 'italic',
                fontSize: '22px',
                color: '#00afdc',
                lineHeight: '1.3em',
                marginLeft: size.width >= 750 ? '50px' : '0px',
                marginTop: size.width >= 750 ? '0px' : '20px',
                textAlign: size.width >= 750 ? 'initial' : 'center'
              }}
            >
              We create technology with a big impact that allows Fintechs and Startups to grow and evolve rapidly.
            </p>
          </div>
        </div>
      </div>
      <section
        style={{
          height: size.width >= 750 ? '656px' : '730px',
          backgroundColor: '#F9F9F9'
        }}>
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: size.width >= 750 ? 'row' : 'column',
              height: '100%',
              alignItems: size.width >= 750 ? 'initial' : 'center'
            }}
          >
            <div
              style={{
                width: size.width >= 750 ? '590px' : '300px',
                height: size.width >= 750 ? '756px' : '446px',
                overflow: 'hidden',
                position: size.width >= 750 ? 'relative' : 'static',
                top: size.width >= 750 ? '40px' : '0px',
              }}
            >
              <img 
                src={cellphone}
                alt="Cell phone"
                style={{
                  width: size.width >= 750 ? '1091px' : '801px',
                  height: size.width >= 750 ? '756px' : '466px',
                  marginTop: size.width >= 750 ? '0px' : '20px'
                }} />
            </div>
            <div
              style={{
                marginLeft: size.width >= 750 ? '30px' : '0px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: size.width >= 750 ? 'initial' : 'center'
              }}
            >
              <p
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: '40px',
                  fontWeight: 200,
                  color: '#00afdc',
                  width: '350px',
                  textAlign: size.width >= 750 ? 'initial' : 'center',
                  marginTop: size.width >= 750 ? '0px' : '20px'
                }}
              >
                We lead the future of banking
              </p>
              <div
                style={{
                  border: '2px solid #00afdc',
                  width: '57px',
                  margin: '20px 0px'
                }}
              ></div>
              <p
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: '20px',
                  fontWeight: 200,
                  color: '#707070',
                  width: size.width >= 750 ? '470px' : '300px',
                  textAlign: size.width >= 750 ? 'initial' : 'center',
                  marginBottom: size.width >= 750 ? '0px' : '20px'
                }}
              >
                We drive startups and Fintechs through an agil and secure  platform 100% SAAS to let them have different banking capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ 
          height: size.width >= 750 ? '656px' : '800px',
          backgroundImage:' linear-gradient( #A7EDFF, #E1F9FF)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            // height: '100%',
            // width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: size.width >= 750 ? 'row' : 'column',
              //height: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: size.width >= 750 ? 'initial' : 'center'
              }}
            >
              <p
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: '40px',
                  fontWeight: 200,
                  color: '#00253D',
                  width: size.width >= 750 ? '440px' : 300,
                  textAlign: size.width >= 750 ? 'initial' : 'center',
                  marginTop: size.width >= 750 ? '0px' : '20px'
                }}
              >
                Technology 100% Cloud
              </p>
              <div
                style={{
                  border: '2px solid #00253D',
                  width: '57px',
                  margin: '20px 0px'
                }}
              ></div>
              <p
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: '20px',
                  fontWeight: 200,
                  color: '#00253D',
                  width: size.width >= 750 ? '480px' : '300px',
                  textAlign: size.width >= 750 ? 'initial' : 'center'
                }}
              >
                The financial ecosystem is experimenting a revolution with open banking tools and Leancore is your key partner to lead this transformation.  
              </p>
              <Link 
                to="https://api.leancore.co/specification" 
                style={{
                  borderRadius: 25,
                  justifyContent: 'center',
                  border: '2px solid #00afdc',
                  backgroundColor: '#00afdc',
                  color: 'white',
                  padding: '4px 40px',
                  marginTop: '40px',
                  width: '192px',
                  textAlign: 'center'
                }}
              >
                Try our API
              </Link>
            </div>
            <div
              style={{
                //height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: size.width >= 750 ? '210px' : '0px'
              }}
            >
              <img 
                src={cloud}
                alt="Cloud technology"
                style={{
                  marginTop: size.width >= 750 ? '0px' : '20px', 
                  width: size.width >= 750 ? '385.79px' : '300px',
                  height: size.width >= 750 ?'436.49px' : '350.7px'
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          height: size.width >= 750 ? '656px' : '1350px',
          backgroundColor: '#F9F9F9'
        }}>
        <div
          style={{
            // height: '100%',
            // width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'Open Sans',
              fontSize: '40px',
              fontWeight: 200,
              color: '#00afdc',
              width: size.width >= 750 ? '600px' : '300px',
              textAlign: 'center',
              lineHeight: '1em',
              margin: '50px 0px'
            }}
          >
            Leancore has most innovative features in the market
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: size.width >= 750 ? 'row' : 'column',
              height: '55%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '50px',
                borderTop: '2px solid #00afdc'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: size.width >= 750 ? 'initial' : 'center',
                  marginBottom: '20px'
                }}
              >
                <img src={qrImage} alt="QR links" style={{ width: '51px', height: '51px' }} />
                <p 
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                    fontWeight: 200,
                    color: '#707070',
                    marginLeft: '20px'
                  }}
                >
                  QR and Whatsapp links
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: size.width >= 750 ? 'initial' : 'center',
                  marginBottom: '20px'
                }}
              >
                <img src={facial} alt="Facial recognition" style={{ width: '51px', height: '51px' }} />
                <p 
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                    fontWeight: 200,
                    color: '#707070',
                    marginLeft: '20px',
                    width: size.width >= 750 ? '100%' : '50%',
                    textAlign: size.width >= 750 ? 'initial' : 'center'
                  }}
                >
                  Payments with facial recognition
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: size.width >= 750 ? 'initial' : 'center',
                  marginBottom: '20px'
                }}
              >
                <img src={crypto} alt="Cryptocurrencies" style={{ width: '51px', height: '51px' }} />
                <p 
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                    fontWeight: 200,
                    color: '#707070',
                    marginLeft: '20px'
                  }}
                >
                  Cryptocurrencies support
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: size.width >= 750 ? 'initial' : 'center',
                }}
              >
                <img src={loan} alt="Loans" style={{ width: '51px', height: '51px' }} />
                <p 
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                    fontWeight: 200,
                    color: '#707070',
                    marginLeft: '20px',
                    width: size.width >= 750 ? '330px' : '50%',
                    textAlign: size.width >= 750 ? 'initial' : 'center'
                  }}
                >
                  Loans and microloans management for third parties
                </p>
              </div>
            </div>
            <div
              style={{
                //height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <img
                src={card}
                alt="Credit card"
                style={{ 
                  width: size.width >= 750 ? '345.79px' : '300px',
                  height: size.width >= 750 ? '346.49px' : '300.7',
                  margin: size.width >= 750 ? '0px 20px' : '20px auto'
                }} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '50px',
                borderTop: '2px solid #00afdc'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: size.width >= 750 ? 'initial' : 'center',
                  marginBottom: '20px'
                }}
              >
                <img src={savings} alt="Savings" style={{ width: '51px', height: '51px' }} />
                <p 
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                    fontWeight: 200,
                    color: '#707070',
                    marginLeft: '20px',
                    width: size.width >= 750 ? '100%' : '50%',
                    textAlign: size.width >= 750 ? 'initial' : 'center',
                  }}
                >
                  Savings accounts management
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: size.width >= 750 ? 'initial' : 'center',
                  marginBottom: '20px'
                }}
              >
                <img src={fraud} alt="Fraud detection" style={{ width: '51px', height: '51px' }} />
                <p 
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                    fontWeight: 200,
                    color: '#707070',
                    marginLeft: '20px'
                  }}
                >
                  AI based fraud detection
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: size.width >= 750 ? 'initial' : 'center',
                  marginBottom: '20px'
                }}
              >
                <img src={layer} alt="Information layer" style={{ width: '51px', height: '51px' }} />
                <p 
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                    fontWeight: 200,
                    color: '#707070',
                    marginLeft: '20px',
                    width: size.width >= 750 ? '330px' : '50%',
                    textAlign: size.width >= 750 ? 'initial' : 'center',
                  }}
                >
                  A friendly Information layer for payments and transfers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ height: size.width >= 750 ? '281px' : '380px',
        backgroundImage:' linear-gradient( #A7EDFF, #E1F9FF)'
      }}>
        <div
          style={{
            // height: '100%',
            // width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: size.width >= 750 ? 'row' : 'column',
              // height: '100%',
              alignItems: 'center'
            }}
          >
            <img 
              src={coin}
              alt="Coin"
              style={{
                width: '186.48px',
                height: '209px',
                marginTop: size.width >= 750 ? '0px' : '35px' 
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: size.width >= 750 ? '30px' : '0px'
              }}
            >
              <p
                style={{
                  fontSize: '50px',
                  fontWeight: 200,
                  fontFamily: 'Open Sans',
                  color: '#00253D',
                  textAlign: size.width >= 750 ? 'initial' : 'center'
                }}
              >
                Our Strategy
              </p>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 200,
                  fontFamily: 'Open Sans',
                  color: '#00253D',
                  textAlign: size.width >= 750 ? 'initial' : 'center',
                }}
              >
                Give free tech to users and collect payments
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ height: '1000px', backgroundColor: '#F9F9F9' }}>
        <div
          style={{
            // height: '100%',
            // width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'Open Sans',
              fontSize: '40px',
              fontWeight: 200,
              color: '#00afdc',
              textAlign: 'center',
              lineHeight: '1em',
              margin: '50px 0px',
              letterSpacing: '0.4em'
            }}
          >
            What makes us different?
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: size.width >= 750 ? 'row' : 'column',
              height: size.width >= 750 ? '55%' : '100%',
              marginTop: size.width >= 750 ? '200px' : '10px'
            }}
          >
            <div
              style={{
                // height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <img
                src={userImage}
                alt="User"
                style={{ 
                  width: '469px',
                  height: '752px',
                  margin: '0px 20px',
                  display: size.width >= 750 ? 'block' : 'none' 
                }} 
              />
              <div
                style={{
                  position: size.width >= 750 ? 'relative' : 'static',
                  width: size.width >= 750 ? '398px' : '300px',
                  height: '278px',
                  backgroundColor: 'white',
                  top: size.width >= 750 ? '-215px' : '0px',
                  left: size.width >= 750 ? '178px' : '0px',
                  borderTop: '5px solid #00afdc',
                }}
              >
                <ul
                  className="bullet-ul"
                  style={{
                    marginTop: '27px',
                    marginLeft: '30px',
                  }}
                >
                    <li
                      style={{
                        fontFamily: "Open Sans",
                        color: '#707070',
                        lineHeight: '18pt',
                        fontSize: '15px',
                        fontWeight: 400,
                        marginBottom: '20px',
                        width: '95%'
                      }}
                    >
                      The first company that incorporates Whatsapp links and facial recognition as a different way to make payments and transactions.
                    </li>
                    <li
                      style={{
                        fontFamily: "Open Sans",
                        color: '#707070',
                        lineHeight: '18pt',
                        fontSize: '15px',
                        fontWeight: 400,
                        marginBottom: '20px',
                        width: '95%'
                      }}
                    >
                      We are a reliable partner to improve, transform and co-create the best user experience for Fintechs and startups users.
                    </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                // height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: '28px'
              }}
            >
              <img
                src={pcCard}
                alt="Credit card"
                style={{ 
                  width: '465px',
                  height: '748px',
                  margin: '0px 90px',
                  display: size.width >= 750 ? 'block' : 'none' 
                }} />
                <div
                  style={{
                    position: size.width >= 750 ? 'relative' : 'static',
                    width: size.width >= 750 ? '398px' : '300px',
                    height: '278px',
                    backgroundColor: 'white',
                    top: '-748px',
                    borderTop: '5px solid #00afdc'
                  }}
                >
                  <ul
                    className="bullet-ul"
                    style={{
                      marginTop: '27px',
                      marginLeft: '30px',
                    }}
                  >
                      <li
                        style={{
                          fontFamily: "Open Sans",
                          color: '#707070',
                          lineHeight: '18pt',
                          fontSize: '15px',
                          fontWeight: 400,
                          marginBottom: '20px',
                          width: '83%'
                        }}
                      >
                        We are permanently improving all our technology and services to create better products.  
                      </li>
                      <li
                        style={{
                          fontFamily: "Open Sans",
                          color: '#707070',
                          lineHeight: '18pt',
                          fontSize: '15px',
                          fontWeight: 400,
                          marginBottom: '20px',
                          width: '83%'
                        }}
                      >
                        We promise you effectivity, security and simplicity  
                      </li>
                      <li
                        style={{
                          fontFamily: "Open Sans",
                          color: '#707070',
                          lineHeight: '18pt',
                          fontSize: '15px',
                          fontWeight: 400,
                          marginBottom: '20px',
                          width: '83%'
                        }}
                      >
                        We are a white label solution, that means our brand won't be visible in the final product  
                      </li>
                  </ul>
                </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: size.width >= 750 ? 'row' : 'column',
              alignItems: 'center',
              marginTop: '20px'
            }}
          >
            <p
              style={{
                fontSize: '40px',
                fontWeight: 200,
                fontFamily: 'Open Sans',
                color: '#00253D',
              }}
            >
              Are you a startup?
            </p>
            <button 
              onClick={handleOpenModal}
              style={{
                borderRadius: 25,
                justifyContent: 'center',
                border: '2px solid #00afdc',
                color: '#00afdc',
                fontWeight: 600,
                fontFamily: 'Open Sans',
                padding: '4px 40px',
                marginLeft: size.width >= 750 ? '60px' : '0px',
                marginBottom: size.width >= 750 ? '0px' : '20px',
                backgroundColor: 'white'
              }}
            >
              TRY FOR FREE
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const size = useWindowSize();

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        size={size}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
