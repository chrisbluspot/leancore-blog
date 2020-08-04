import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-4" key={post.id}>
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
                  <p>
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
                <p>
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
