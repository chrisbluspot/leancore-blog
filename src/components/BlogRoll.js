import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
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

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div 
        className="columns is-multiline"
        style={{
          display: this.state.width >= 750 ? 'flex' : 'block',
          justifyContent: this.state.width >= 750 ? 'space-between' : 'initial'
        }}>
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className="is-parent column is-4"
              key={post.id}
              style={{
                maxWidth: this.state.width >= 750 ? '30%' : '100%'
              }}>
              <article
                className={`blog-list-item tile is-child box ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
                style={{ 
                  borderTop: '4px solid #00AFDC',
                  borderRadius: '0px'
                }}
              >
                <header style={{ flexDirection: 'column' }}>
                  <p
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 16,
                      fontWeight: 400,
                      color: '#B2B2B2'
                    }}
                  >
                    {post.frontmatter.date}
                  </p>
                  <p className="post-meta">
                    <Link
                      style = {{
                        fontFamily: 'Open Sans',
                        fontSize: 26,
                        fontWeight: 400,
                        color: '#00253D',
                        lineHeight: '0.032em',
                        textDecoration: 'none'
                      }}
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                </header>
                <div style={{ border: '2px solid #00AFDC', width: '20%', marginBottom: '7%' }}></div>
                <p
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: 16,
                    fontWeight: 400,
                    color: '#707070'
                  }}
                >
                  {post.excerpt}
                  <br />
                  <br />
                  {/* <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link> */}
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)

// @include media(">=1400", "<=1920"){
//   .full-width-image
//     width: 100vw
//     height: 533px
//     background-size: contain
//     background-position: bottom
//     display: flex
//     justify-content: center
//     align-items: flex-end
// }