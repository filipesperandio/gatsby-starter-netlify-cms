import React from "react"
import { Link } from "gatsby"

import instagram from "../img/social/instagram.svg"
import spotify from "../img/social/spotify.svg"

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Apresentação
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Sobre nós
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contato
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Artigos e Publicações
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="Spotify" href="https://open.spotify.com/user/26nfkjwihlyga0c6gnv2xnwyh">
                  <img src={spotify} alt="Spotify" style={{ width: "1em", height: "1em" }} />
                </a>
                <a title="Instagram" href="https://instagram.com/institutoespiritualidadesaude">
                  <img src={instagram} alt="Instagram" style={{ width: "1em", height: "1em" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
