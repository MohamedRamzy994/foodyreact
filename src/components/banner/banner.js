import React, { Component } from 'react'
import bannerimg from '../../assets/images/pic1.png'
export class Banner extends Component {
  render() {
    return (
        <section id="home" className="w3l-banner py-5">
        <div className="container py-lg-5 py-md-4">
            <div className="row align-items-center">
                <div className="col-lg-6 col-sm-12 mt-lg-0 mt-4">
                    <span className="subhny-title mb-2">Fast and Easy</span>
                    <h3 className="mb-4">Express<br/>Home Delivery</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi.
                        Distinctio accusantium fugit odit? Fugit ipsam. Sed ac fringilla ex. Nam mauris velit, ac
                        cursus quis, non leo.</p>
                    <div className="mt-sm-5 mt-4">
                        <a className="btn btn-outline-primary btn-style mr-2" href="about.html"> Read More <span
                                className="fa fa-chevron-right"></span></a>
                        <a className="btn btn-primary btn-style" href="contact.html"> Order Now <span
                                className="fa fa-chevron-right"></span></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-10 mt-lg-0 mt-5">
                    <div className="img-effect text-lg-center">
                        <img src={bannerimg} alt="banner" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}

export default Banner