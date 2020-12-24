import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import { UnsplashImage } from "../components/PageUnsplashImage"

const DefaultIllustration = (
  <UnsplashImage
    src="/img/spirituality.jpg"
    credit={{
      author: "Mohamed Nohassi",
      href:
        "https://unsplash.com/@coopery?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
    }}
  />
)

export const PostTemplate = ({
  content,
  contentComponent,
  description,
  author,
  file,
  tags,
  featuredimage,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  const image = featuredimage ? (
    <PreviewCompatibleImage
      imageInfo={{
        image: featuredimage,
        alt: `featured image thumbnail for post ${title}`,
      }}
    />
  ) : (
    null
  )

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>

            <p><b>{author}</b></p>
            <p>{description}</p>

            <div className="featured-thumbnail mb-2">{image}</div>

            {file && (
              <p className="has-text-right">
                <a href={file} className="button" target="_blank">
                  Download
                </a>
              </p>
            )}

            <PostContent content={content} />

            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

PostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Post = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        author={post.frontmatter.author}
        file={post.frontmatter.file}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Post

export const pageQuery = graphql`
  query PostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        author
        file
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
