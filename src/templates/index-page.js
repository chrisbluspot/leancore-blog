import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import useWindowSize from '../hooks/useWindowSize'
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

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  size
}) => (
  <div>
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
            zIndex: 2,
            marginTop: '65px',
          }}
        >
          <img src={blueCubes} alt="Blue cubes" style={{ width: '1300px', height: '650px' }} />
        </div>
        <div
          style={{
            position: 'absolute',
            marginTop: '5px',
          }}
        >
          <img src={whiteCubes} alt="White cubes" style={{ width: '1300px', height: '650px' }} />
        </div>
        <div
          style={{
            width: '750px',
            marginTop: '294px',
            display: 'flex',
            flexDirection: 'row'
            //paddingLeft: size.width >= 1920 ? '261.8px' : size.width >= 992 ? '60px' : '0px',
          }}
        >
          <img src={logo} alt="Lean Core logo" style={{ width: '209.4px', height: '57.27px' }} />
          <p
            style={{
              fontFamily: 'Open Sans',
              fontWeight: 200,
              fontStyle: 'italic',
              fontSize: '22px',
              color: '#00afdc',
              lineHeight: '1.3em',
              marginLeft: '50px'
            }}
          >
            We create technology with a big impact that allows Fintechs and Startups to grow and evolve rapidly.
          </p>
        </div>
      </div>
    </div>
    <section style={{ height: '656px', backgroundColor: '#F9F9F9' }}>
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
            flexDirection: 'row',
            height: '100%',
          }}
        >
          <div
            style={{
              width: '590px',
              height: '756px',
              overflow: 'hidden',
              position: 'relative',
              top: '40px',
            }}
          >
            <img 
              src={cellphone}
              alt="White cubes"
              style={{
                width: '1091px',
                height: '756px'
              }} />
          </div>
          <div
            style={{
              marginLeft: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'Open Sans',
                fontSize: '40px',
                fontWeight: 200,
                color: '#00afdc',
                width: '350px'
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
                width: '470px'
              }}
            >
              We drive startups and Fintechs through an agil and secure  platform 100% SAAS to let them have different banking capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      style={{ height: '656px',
      backgroundImage:' linear-gradient( #A7EDFF, #E1F9FF)'
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
            flexDirection: 'row',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'Open Sans',
                fontSize: '40px',
                fontWeight: 200,
                color: '#00253D',
                width: '440px'
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
                width: '480px'
              }}
            >
              The financial ecosystem is experimenting a revolution with open banking tools and Leancore is your key partner to lead this transformation.  
            </p>
            <Link 
              to="https://leancore.co/specification/" 
              style={{
                borderRadius: 25,
                justifyContent: 'center',
                border: '2px solid #00afdc',
                backgroundColor: '#00afdc',
                color: 'white',
                padding: '4px 40px',
                marginTop: '40px',
                width: '162px'
              }}
            >
              Try our API
            </Link>
          </div>
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '210px'
            }}
          >
            <img src={cloud} alt="Cloud technology" style={{ width: '385.79px', height: '436.49px' }} />
          </div>
        </div>
      </div>
    </section>
    <section style={{ height: '656px', backgroundColor: '#F9F9F9' }}>
      <div
        style={{
          height: '100%',
          width: '100%',
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
            width: '600px',
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
            flexDirection: 'row',
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
                  marginLeft: '20px'
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
                alignItems: 'center'
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
                  width: '330px'
                }}
              >
                Loans and microloans management for third parties
              </p>
            </div>
          </div>
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <img
              src={card}
              alt="Credit card"
              style={{ 
                width: '345.79px',
                height: '346.49px',
                margin: '0px 20px' 
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
                  marginLeft: '20px'
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
                  width: '330px',
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
      style={{ height: '281px',
      backgroundImage:' linear-gradient( #A7EDFF, #E1F9FF)'
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
            flexDirection: 'row',
            height: '100%',
            alignItems: 'center'
          }}
        >
          <img src={coin} alt="Coin" style={{ width: '186.48px', height: '209px' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '30px'
            }}
          >
            <p
              style={{
                fontSize: '50px',
                fontWeight: 200,
                fontFamily: 'Open Sans',
                color: '#00253D'
              }}
            >
              Our Strategy
            </p>
            <p
              style={{
                fontSize: '20px',
                fontWeight: 200,
                fontFamily: 'Open Sans',
                color: '#00253D'
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
          height: '100%',
          width: '100%',
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
            flexDirection: 'row',
            height: '55%',
            marginTop: '200px'
          }}
        >
          <div
            style={{
              height: '100%',
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
                margin: '0px 20px' 
              }} 
            />
            <div
              style={{
                position: 'relative',
                width: '398px',
                height: '278px',
                backgroundColor: 'white',
                top: '-215px',
                left: '178px',
                zIndex: 2,
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
              height: '100%',
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
                margin: '0px 90px' 
              }} />
              <div
                style={{
                  position: 'relative',
                  width: '398px',
                  height: '278px',
                  backgroundColor: 'white',
                  top: '-748px',
                  zIndex: 2,
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
            flexDirection: 'row',
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
          <Link 
            to="/contact" 
            style={{
              borderRadius: 25,
              justifyContent: 'center',
              border: '2px solid #00afdc',
              color: '#00afdc',
              padding: '4px 40px',
              marginLeft: '60px'
            }}
          >
            TRY FOR FREE
          </Link>
        </div>
      </div>
    </section>
  </div>
)

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
