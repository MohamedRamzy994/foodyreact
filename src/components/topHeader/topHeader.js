import React, { Component } from 'react'

export class TopHeader extends Component {
  render() {
      
    return (
      <header id="site-header" className="fixed-top">
        <section className="w3l-header-4">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <h1><a className="navbar-brand" href="index.html">
                            <span>Food</span>yuppie
                        </a></h1>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="fa icon-expand fa-bars"></span>
                        <span className="fa icon-close fa-times"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-lg-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                              
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav search-right mt-lg-0 mt-2">
                            <li className="nav-item mr-3" title="Search"><a href="#search" className="btn search-search">
                                    <span className="fa fa-search" aria-hidden="true"></span></a></li>
                            <li className="nav-item"><a href="tel:+(12)234-11-24"
                                    className="btn btn-primary btn-style d-none d-lg-block btn-style mr-2"><span
                                        className="fa fa-phone mr-3" aria-hidden="true"></span> (32)234-14-94</a>
                            </li>
                        </ul>

                   
                        <div id="search" className="pop-overlay">
                            <div className="popup">
                                <form action="#" method="GET" className="d-sm-flex">
                                    <input type="search" placeholder="Search.." name="search" required="required" autoFocus />
                                    <button type="submit">Search</button>
                                    <a className="close" href="#url">&times;</a>
                                </form>
                            </div>
                        </div>
                     
                    </div>
                  
                    <div className="mobile-position">
                        <nav className="navigation">
                            <div className="theme-switch-wrapper">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <div className="mode-container">
                                        <i className="gg-sun"></i>
                                        <i className="gg-moon"></i>
                                    </div>
                                </label>
                            </div>
                        </nav>
                    </div>
                </nav>
            </div>
        </section>
    </header>
    )
  }
}

export default TopHeader