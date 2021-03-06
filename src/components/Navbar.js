import React from "react"
import { Link } from "gatsby"
import github from "../img/github-icon.svg"
import Logo from "./Logo"

const NavbarLink = ({ children, ...props }) => (
  <Link activeClassName="active" {...props}>
    {children}
  </Link>
)

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <NavbarLink to="/" className="navbar-item" title="Logo">
              <Logo />
            </NavbarLink>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <NavbarLink className="navbar-item" to="/research">
                Pesquisa
              </NavbarLink>
              <NavbarLink className="navbar-item" to="/edu">
                Educação
              </NavbarLink>
              <NavbarLink className="navbar-item" to="/health">
                Saúde Integral
              </NavbarLink>
              <NavbarLink className="navbar-item" to="/contact">
                Contato
              </NavbarLink>
              <NavbarLink className="navbar-item" to="/about">
                Sobre nós
              </NavbarLink>
            </div>
            <div className="navbar-end has-text-centered"></div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
