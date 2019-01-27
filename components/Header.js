import Link from 'next/link';
import { Spring, Keyframes, config } from 'react-spring'
import React from 'react'
import '../styles/styles.sass'
class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
      loggedIn: this.props.loggedIn,
    }
  }

  toggleNav = () => {
    console.log(!this.state.isActive);
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <div>
        <head>
          <title>Penn Labs</title>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="styles/style.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/static/img/favicon.ico" type="image/png/ico" />
        </head>

        <nav className="navbar is-info" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
            <img
              src="/static/img/beaker-only.png"
              alt="Penn Labs"
              width="auto"/>
            </a>
            <button className="button navbar-burger is-info" onClick={this.toggleNav}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start"></div>
            <div className="navbar-end" style={{ marginRight: "0.5rem"}}>
              <a className="navbar-item" href="/team">
                Team
              </a>
              <a className="navbar-item" href="/products">
                Products
              </a>
              <a className="navbar-item" href="/resources">
                Resources
              </a>
              <a className="navbar-item" href="https://medium.com/@pennappslabs">
                Blog
              </a>
              <a className="navbar-item" href="/account">
                {this.state.loggedIn ? <i class="fas fa-user"></i> : (
                  <Spring from={{ opacity: 0 }} to={{ opacity: 1, borderColor: "#209CEE", color: "#209CEE" }} delay={500} config={config.molasses}>
                    {props => (
                      <div style={props}>
                      <a href="https://platform.pennlabs.org/accounts/login" style={{ maxHeight: 40 }} className="button is-info is-inverted"> Login </a>
                      </div>
                    )}
                  </Spring>
                )}
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}




export default Header;
