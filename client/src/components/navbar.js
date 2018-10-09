import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  renderNotAuthenticatedNavbar() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark primary-color">

          <a className="navbar-brand" style={{color: "white"}} componentClass={Link} href="/" to="/">App Project</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="basicExampleNav">
      
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <a className="nav-link" componentClass={Link} href="/about" to="/about">O projektu
                          <span className="sr-only">(current)</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" componentClass={Link} href="/participate" to="/participate">Kako sudjelovati</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" componentClass={Link} href="/results" to="/results">Rezultati</a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Galerija</a>
                    <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" componentClass={Link} href="/maps" to="/maps">Karte</a>
                        <a className="dropdown-item" componentClass={Link} href="/field" to="/field">Teren</a>
                    </div>
                  </li>
              </ul>

              <form className="form-inline">
                  <div className="md-form my-0">
                      <Link to="/login">Login</Link>
                  </div>
               </form>
          </div>
        </nav>
      );
  };

  renderAuthenticatedNavbar(){
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark primary-color">

          <a className="navbar-brand" style={{color: "white"}} componentClass={Link} href="/" to="/">App Project</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="basicExampleNav">
      
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <a className="nav-link" componentClass={Link} href="/about" to="/about">O projektu
                          <span className="sr-only">(current)</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" componentClass={Link} href="/participate" to="/participate">Kako sudjelovati</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" componentClass={Link} href="/results" to="/results">Rezultati</a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Galerija</a>
                    <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" componentClass={Link} href="/maps" to="/maps">Karte</a>
                        <a className="dropdown-item" componentClass={Link} href="/field" to="/field">Teren</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Uredi</a>
                    <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" componentClass={Link} href="/editabout" to="/editabout">O projektu</a>
                        <a className="dropdown-item" componentClass={Link} href="/editparticipate" to="/editparticipate">Kako sudjelovati</a>
                        <a className="dropdown-item" componentClass={Link} href="/editresults" to="/editresults">Rezultati</a>
                        <a className="dropdown-item" componentClass={Link} href="/newinput" to="/newinput">Novi upis</a>
                        <a className="dropdown-item" componentClass={Link} href="/datalist" to="/datalist">Pregled podataka</a>
                    </div>
                   </li>
              </ul>

              <form className="form-inline">
                  <div className="md-form my-0">
                      <Link to="/logout">Logout</Link>
                  </div>
               </form>
          </div>
        </nav>
    )
  }

  renderNavbar() {
    if (this.props.authenticated) {
      return (
        <div>
          {this.renderAuthenticatedNavbar()}
        </div>
      );
    } else {
      return (
        <div>
          {this.renderNotAuthenticatedNavbar()}
        </div>
      );
    };
  }

	render() {
		return (
      <div>
			 {this.renderNavbar()}
      </div>
		);
	};
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(NavBar);