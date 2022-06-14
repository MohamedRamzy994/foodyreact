import React, { Component } from 'react'

export class Footer extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         goTop:this.topFunction
      }
    }
     
       topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
  render() {
    return (
        <section class="w3l-footer">
        <footer class="footer-28 py-5">
            <div class="container py-md-5">
                <div class="footer-top-28 text-center">
                    <div class="row foothny-grids mb-lg-5 mb-4">
                        <div class="col-lg-6 fotter-gd-left px-0">
                            <a href="#"><img src="assets/images/footer.jpg" class="img-fluid" alt="" /></a>
                        </div>
                        <div class="col-lg-6 fotter-gd-right">
                            <div class="ft-grid">
                                <h5><span class="text-content"> Call us to make order now </span>

                                    <span class="fa fa-phone mr-3" aria-hidden="true"></span>21-600-28-499
                                </h5>

                            </div>
                        </div>
                    </div>

                    <h2><a class="navbar-brand" href="index.html">
                            Food<span>yuppie</span>
                        </a></h2>
                    <p class="f-para mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic
                        odio
                        voluptatem
                        tenetur consequatur.Curabitur id gravida risus. Fusce eget ex fermentum</p>
                </div>
                <div class="footer-social-accounts text-center mt-lg-5 mt-4">

                    <ul class="social-icons mt-4">
                        <li class="facebook">
                            <a href="#link" title="Facebook">
                                <span class="fa fa-facebook" aria-hidden="true"></span>
                            </a>
                        </li>
                        <li class="twitter">
                            <a href="#link" title="Twitter">
                                <span class="fa fa-twitter" aria-hidden="true"></span>
                            </a>
                        </li>
                        <li class="dribbble">
                            <a href="#link" title="Dribbble">
                                <span class="fa fa-dribbble" aria-hidden="true"></span>
                            </a>
                        </li>
                        <li class="google mr-0">
                            <a href="#link" title="Google">
                                <span class="fa fa-google" aria-hidden="true"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="midd-footer-28 align-center mt-lg-0 mt-4">
                <p class="copy-footer-28 text-center"> &copy; 2020 Foodyuppie. All Rights Reserved. Design by <a
                        href="#">APPLET</a></p>

            </div>
          
            <button onClick={this.state.goTop} id="movetop" title="Go to top">
                <span class="fa fa-angle-up"></span>
            </button>
            
           
        </footer>
        </section>
    )
  }
}

export default Footer