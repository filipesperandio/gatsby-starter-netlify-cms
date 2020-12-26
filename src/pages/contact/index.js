import React from "react"
import Layout from "../../components/Layout"
import { Marker, Envelope, Social } from "../../components/Icons"
import { ContactForm } from "../../components/ContactForm"

const Index = ({ location }) => {
  const params = new URLSearchParams(location.search)
  const urlFormName = params.get("formName")
  const formName = urlFormName ? `contact-${urlFormName}` : "contact"

  return (
    <Layout>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.213932512414!2d-49.26451510234615!3d-25.43111031731486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46a637002d3%3A0xc7f133d0f842ba58!2sR.%20Conselheiro%20Laurindo%2C%20502%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080060-100!5e0!3m2!1sen!2sbr!4v1608640965855!5m2!1sen!2sbr"
        width="100%"
        height="400"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        ariaHidden="false"
        tabindex="0"
      />
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="columns">
              <div className="column icon">
                <Marker className="mr-2" />
              </div>
              <div className="column">
                Rua Conselheiro Laurindo, 502 - Sala 903
                <br />
                80060-100 - Curitiba/PR
              </div>
            </div>
            <div className="columns">
              <div className="column icon">
                <Envelope className="mr-2" />
              </div>
              <div className="column">
                <a href="mailto:contato@espiritualidade-saude.org" target="_blank">
                  contato@espiritualidade-saude.org
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column icon">
                <Social.Instagram className="mr-2" />
              </div>
              <div className="column">
                <a
                  title="Instagram"
                  href="https://instagram.com/institutoespiritualidadesaude"
                  target="_blank">
                  Instagram
                </a>
              </div>
            </div>
            <h1>Fale conosco!</h1>
          </div>
          <ContactForm formName={formName} />
        </div>
      </section>
    </Layout>
  )
}

export default Index
