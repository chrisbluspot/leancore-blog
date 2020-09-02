import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import CookieConsent, { Cookies } from "react-cookie-consent"
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />

        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/leancore-landing.png`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          flipButtons
          cookieName="gatsby-gdpr-facebook-pixel"
          style={{
            fontFamily: "Open Sans",
          }}
          buttonStyle={{
            backgroundColor: "#00afdc",
            color: "white",
            fontFamily: "Open Sans",
            fontWeight: 600,
            fontSize: 18,
            borderRadius: 25,
            paddingLeft: 20,
            paddingRight: 20,
          }}
          declineButtonStyle={{
            color: "white",
            fontFamily: "Open Sans",
            fontWeight: 600,
            fontSize: 18,
            borderRadius: 25,
            paddingLeft: 20,
            paddingRight: 20,
          }}
      >
        This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you.
        <br/>
        We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.
      </CookieConsent>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
