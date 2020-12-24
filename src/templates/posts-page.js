import React from "react"
import { Link, graphql } from "gatsby"

import Posts from "../components/Posts"
import Layout from "../components/Layout"
import PageImage from "../components/PageUnsplashImage"
import { HTMLContent } from "../components/Content"

const ContactLink = ({ contactPrefix }) => (
  <div className="content">
    {contactPrefix} <Link to="/contact?formName=research">Entra em contato com a gente!</Link>
  </div>
)

export const PostsPageTemplate = ({
  contactPrefix,
  content,
  description,
  image,
  imageCredit,
  title,
}) => {
  return (
    <div>
      <PageImage src={image.childImageSharp.fluid.src} credit={imageCredit}>
        <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
          {title}
        </h1>
      </PageImage>

      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <HTMLContent content={description} />

                <ContactLink contactPrefix={contactPrefix} />

                <HTMLContent className="content" content={content} />

                <Posts />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const PostsPage = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <PostsPageTemplate
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        imageCredit={post.frontmatter.imageCredit}
        description={post.frontmatter.description}
        contactPrefix={post.frontmatter.contactPrefix}
      />
    </Layout>
  )
}

export default PostsPage

export const query = graphql`
  query PostsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        contactPrefix
        imageCredit {
          author
          href
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
