import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"
import PageImage from "../components/PageUnsplashImage"

const PRIMARY_COLOR = "rgb(154, 1, 205)"

export const IndexPageTemplate = ({
  logo,
  image,
  imageCredit,
  title,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  return (
    <div>
      <PageImage src={image.childImageSharp.fluid.src} credit={imageCredit}>
        <div
          style={{
            display: "flex",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
          }}>
          <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
            {title}
          </h1>
          <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
            {subheading}
          </h3>
        </div>
      </PageImage>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content wrapper">
                    <div className="tile">
                      <h3 className="subtitle center">{mainpitch.description}</h3>
                    </div>
                    <div className="logo-container">
                      <img className="image logo" src={logo.childImageSharp.fluid.src} />
                    </div>
                  </div>
                  <div className="columns">
                    <div
                      className="description column is-12"
                      dangerouslySetInnerHTML={{ __html: description }}
                      style={{
                        lineHeight: "1.6",
                        marginTop: "1rem",
                      }}></div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  {false && (
                    <>
                      <div className="column is-12">
                        <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
                        <BlogRoll />
                        <div className="column is-12 has-text-centered">
                          <Link className="btn" to="/blog">
                            Read more
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        logo={frontmatter.logo}
        image={frontmatter.image}
        imageCredit={frontmatter.imageCredit}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        logo {
          childImageSharp {
            fluid(maxWidth: 1622, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageCredit {
          author
          href
        }
        subheading
        mainpitch {
          description
        }
        description
        intro {
          blurbs {
            image
            text
          }
        }
      }
    }
  }
`
