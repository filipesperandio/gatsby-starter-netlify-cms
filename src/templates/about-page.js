import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import PageImage from "../components/PageUnsplashImage"

export const AboutPageTemplate = ({ title, content, image, imageCredit, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <PageImage src={image.childImageSharp.fluid.src} credit={imageCredit} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const AboutPage = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        imageCredit={post.frontmatter.imageCredit}
      />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
