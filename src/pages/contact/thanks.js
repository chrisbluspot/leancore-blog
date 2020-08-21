import React from 'react'
import Layout from '../../components/Layout'
import indexBackground from '../../img/new-header@2x.png'

export default () => (
  <Layout>
    <div
      className="half-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${indexBackground}), linear-gradient(30deg, #A7EDFF, #E1F9FF)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
    </div>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1
            style={{
              fontFamily: 'Open Sans',
              fontSize: '40px',
              fontWeight: 600,
              color: '#00253D'
            }}
          >
            Thank you!
          </h1>
          <p
            style={{
              fontFamily: 'Open Sans',
              fontSize: '20px',
              fontWeight: 600,
              color: '#00253D'
            }}
          >
            We will reply to you soon
          </p>
        </div>
      </div>
    </section>
  </Layout>
)
