import React from "react"

import { Link } from "gatsby"

import BlogRoll from "../../components/BlogRoll"
import Layout from "../../components/Layout"
import PageImage from "../../components/PageUnsplashImage"

const image = {
  src: "/img/blooming3.jpg",
  author: "Eugene Mykulyak",
  href:
    "https://unsplash.com/@eugenegrunge?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
}

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageImage src={image.src} credit={{ author: image.author, href: image.href }}>
          <h1 className="has-text-weight-bold is-size-1">Artigos e Publicações</h1>
        </PageImage>
        <section className="section">
          <p>
            Reunimos aqui uma coletânea de publicações, artigos, livros e materias na area
            espiritualidade e saúde.
          </p>
          <p>
            Tem interesse em contribuir? <Link to="/contact">Entra em contato com a gente.</Link>
          </p>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
