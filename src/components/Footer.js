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
              <div className="column is-5">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Instituto de Espiritualidade e Saúde
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
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Pesquisa
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/edu">
                        Educação
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/health">
                        Saúde Integral
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3 social">
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
        <div className="copyright">© 2020 Instituto de Espiritualidade e Saúde</div>
      </footer>
    )
  }
}

export default Footer
