import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import indexBackground from '../img/index-background.png'
import useWindowSize from '../hooks/useWindowSize'
import logo from '../img/logo.png'

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
        backgroundImage: `url(${indexBackground}), linear-gradient(30deg, #A7EDFF, #E1F9FF)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      {/* <div
        style={{
          border: '2px solid red'
        }}
      >
        <h1>Blog</h1>
      </div> */}
      <div
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <div
          style={{
            marginTop: '164px',
            paddingLeft: size.width >= 1920 ? '261.8px' : size.width >= 992 ? '60px' : '0px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              color: 'white',
              fontFamily: 'Open Sans',
              fontSize: '50px',
              fontWeight: '200',
              marginRight: size.width >= 1920 ? '40px' : size.width >= 992 ? '20px' : '10px',
              lineHeight: '30px',
              alignSelf: 'flex-start'
            }}
          >
            Blog
          </h1>
          <img src={logo} alt="Lean Core logo" style={{ width: '209.4px', height: '57.27px' }} />
        </div>
        <div
          style={{
            display: 'flex',
            height: '125px',
            width: '700px',
            paddingLeft: '30px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
            backgroundColor: "white",
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            position: 'relative',
            left: size.width >= 1920 ? '47%' : size.width >= 992 ? '39%' : '10%',
            top:'14%'
          }}
        >
          <h1
            //className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            className="subtitle-text"
            style={{
              // boxShadow:
              //   'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              // backgroundColor: 'rgb(255, 68, 0)',
              color: '#00253D',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
            {/* {title} */}
          </h1>
        </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="content">
              <div className="column is-12">
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/blog">
                    MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
