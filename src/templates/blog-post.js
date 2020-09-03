import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import useWindowSize from '../hooks/useWindowSize'
import blogBackground from '../img/blog-background.png'
import logo from '../img/logo.png'
import Img from 'gatsby-image'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredImage,
  date,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  const size = useWindowSize();
  console.log("feat: ", featuredImage)
  return (
    <div>
      <div
        className="half-width-image margin-top-0"
        style={{
          // backgroundImage: `url(${
          //   !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          // })`,
          background: 'linear-gradient(30deg, #A7EDFF, #E1F9FF)',
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
          height: '308px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '5%',
            zIndex: 2,
          }}
        >
          <img src={blogBackground} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'flex-start',
            position: 'relative',
            top: '60%',
            left: size.width >= 1920 ? '-25%' : size.width >= 992 ? '-35%' : '-10%'
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
        {/* <div
          style={{
            border: '2px solid red'
          }}
        >
          <h1>Blog</h1>
        </div> */}
      </div>
      <section className="section">
        {helmet || ''}
        <div 
          className="content"
        >
          <div style={{ display: "flex", flexDirection: "row"}}>
            <div style={{ flex: 1 }}>
              <div
                style={{ 
                  maxWidth: 600,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: 125,
                  //maxHeight: 625
                }}
              >
                <PreviewCompatibleImage
                  imageInfo={{
                    image: featuredImage,
                    alt: `Image for post ${title}`,
                  }}
                />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#B2B2B2'
                }}
              >
                {date}
              </p>
              <h1 
                //className="title is-size-2 has-text-weight-bold is-bold-light"
                style = {{
                  fontFamily: 'Open Sans',
                  fontSize: 26,
                  fontWeight: 400,
                  color: '#00253D',
                  lineHeight: '0.032em',
                }}
              >
                {title}
              </h1>
              <div 
                style={{ 
                  border: '2px solid #00afdc',
                  width: '46.61px',
                  margin: '31.9px 0px'
                }}
              ></div>
              <PostContent 
                content={content}
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#707070'
                }} 
              />
              {/* {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 20,
                      fontWeight: 400,
                      color: '#00253D',
                      lineHeight: '0.032em',
                    }}
                  >
                    Tags
                  </h4>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null} */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredImage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 625, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        } 
      }
    }
  }
`
