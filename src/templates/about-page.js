import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Members } from "../components/Members"
import Content, { HTMLContent } from "../components/Content"
import PageImage from "../components/PageUnsplashImage"

export const AboutPageTemplate = ({
  title,
  content,
  image,
  imageCredit,
  members,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

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
                <Members members={members} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
        members={post.frontmatter.members}
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
        members {
          name
          role
          linkedin
          instagram
          twitter
          picture {
            childImageSharp {
              fluid(maxWidth: 512, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
