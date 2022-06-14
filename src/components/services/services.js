import React, { Component } from 'react'

export class Services extends Component {
  render() {
    return (
        <React.Fragment>
        <section class="w3l-about-breadcrumb text-left">
          <div class="breadcrumb-bg breadcrumb-bg-about py-3">
            <div class="container grid-breadcrumb">
              <ul class="breadcrumbs-custom-path mt-md-2">
                <li><a href="index.html">Home</a></li>
                <li class="active"><span class="fa fa-angle-double-right mx-2" aria-hidden="true"></span> Services </li>
              </ul>
            </div>
          </div>
        </section>
      
        <div class="w3l-cta5 call-to-action-5-content text-center py-5">
          <div class="container py-md-5">
            <h3 class="subhny-title text-center">What We Offer</h3>
            <h3 class="hny-title text-center mb-4">Our Services</h3>
            <p class="shny-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente commodi maiores
              ullam est nostrum
              aliquam!.Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <a href="#url" class="btn btn-primary btn-style mb-4">Read More <span class="fa fa-chevron-right"></span></a>
            <div class="three-grids d-grid grid-columns-3">
              <div class="grid">
                <div class="icon">
                  <span class="fa fa-free-code-camp" aria-hidden="true"></span>
                </div>
                <div class="icon-info">
                  <h4><a href="#">Hot Plates</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sint consectetur quasi mollitia? Qui, nihil?
                  </p>
                </div>
              </div>
              <div class="grid">
                <div class="icon">
                  <span class="fa fa-flask" aria-hidden="true"></span>
                </div>
                <div class="icon-info">
                  <h4><a href="#">Desserts</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sint consectetur quasi mollitia? Qui, nihil?
                  </p>
                </div>
              </div>
              <div class="grid">
                <div class="icon">
                  <span class="fa fa-book" aria-hidden="true"></span>
                </div>
                <div class="icon-info">
                  <h4><a href="#">Spicy foods</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sint consectetur quasi mollitia? Qui, nihil?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section class="w3l-features14">
          <div class="w3l-feature-6-main py-5">
            <div class="container py-lg-5">
              <div class="row align-center">
                <div class="col-lg-7 img-left">
                  <div class="header-section text-left mb-5">
                    <span class="subhny-title">Services We Do</span>
                    <h3 class="hny-title">
                     What We Do
                    </h3>
                  </div>
                  <div class="grid mt-0">
                    <div class="w3l-feature-6-gd">
                      <div class="icon"><span class="fa fa-free-code-camp"></span></div>
                      <div class="w3l-feature-6-gd-info">
                        <h3><a href="#url">Fresh dishes</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    <div class="w3l-feature-6-gd">
                      <div class="icon"><span class="fa fa-sitemap"></span></div>
                      <div class="w3l-feature-6-gd-info">
                        <h3><a href="#url">Roast</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                  </div>
      
                  <div class="grid">
                    <div class="w3l-feature-6-gd">
                      <div class="icon"><span class="fa fa-glass"></span></div>
                      <div class="w3l-feature-6-gd-info">
                        <h3><a href="#url">Soups</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                    <div class="w3l-feature-6-gd">
                      <div class="icon"><span class="fa fa-clone"></span></div>
                      <div class="w3l-feature-6-gd-info">
                        <h3><a href="#url">Sweet & Snaks</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 img-right mt-5 pt-lg-4">
                  <img src="assets/images/pic2.png" class="img-fluid" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>
     
        <section class="w3l-grids1">
          <div class="hny-three-grids py-5">
            <div class="container py-lg-5">
              <div class="row">
                <div class="col-lg-3 col-sm-6 mt-0 grids5-info">
                  <span class="fa fa-cutlery" aria-hidden="true"></span>
                  <h4><a href="#url">Sweet Cheeses</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse? dolores impedit.</p>
                </div>
                <div class="col-lg-3 col-sm-6 mt-sm-0 mt-5 grids5-info">
                  <span class="fa fa-snowflake-o" aria-hidden="true"></span>
                  <h4><a href="#url">Vegetables</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse? dolores impedit.</p>
                </div>
                <div class="col-lg-3 col-sm-6 mt-md-0 mt-5 grids5-info">
                  <span class="fa fa-glass" aria-hidden="true"></span>
                  <h4><a href="#url">Bean Soup</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse? dolores impedit.</p>
                </div>
                <div class="col-lg-3 col-sm-6 mt-0 grids5-info">
                  <span class="fa fa-adjust" aria-hidden="true"></span>
                  <h4><a href="#url"> Eggs with Ham</a></h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse? dolores impedit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </React.Fragment>
    )
  }
}

export default Services