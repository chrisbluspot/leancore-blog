import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="half-width-image-container margin-top-0"
          style={{
            //backgroundImage: `url('/img/blog-index.jpg')`,
            background: 'linear-gradient(30deg, #A7EDFF, #E1F9FF)',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3"
            style={{
              color: '#00253D',
              padding: '1rem',
            }}
          >
            Ultimas publicaciones
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
