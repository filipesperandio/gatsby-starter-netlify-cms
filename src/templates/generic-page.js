import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import Content, { HTMLContent } from "../components/Content"
import PageImage from "../components/PageUnsplashImage"
import { ContactForm } from "../components/ContactForm"

export const GenericPageTemplate = ({ title, content, image, imageCredit, contentComponent }) => {
  const PageContent = contentComponent || Content
  const formName = "contact-" + window.location.pathname.replace("/", "")

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
                <PageContent className="content" content={content} />
                <ContactForm formName={formName} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const GenericPage = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <GenericPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        imageCredit={post.frontmatter.imageCredit}
      />
    </Layout>
  )
}

export default GenericPage

export const query = graphql`
  query GenericPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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
