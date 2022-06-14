import React, { Component } from 'react'

export class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
      <section class="w3l-about-breadcrumb text-left">
        <div class="breadcrumb-bg breadcrumb-bg-about py-3">
            <div class="container grid-breadcrumb">
                <ul class="breadcrumbs-custom-path mt-md-2">
                    <li><a href="index.html">Home</a></li>
                    <li class="active"><span class="fa fa-angle-double-right mx-2" aria-hidden="true"></span> Contact
                    </li>
                </ul>
            </div>
        </div>
    </section>
  
    <section class="w3l-contact-11 py-5" id="contact">
        <div class="contacts-main py-lg-5 py-md-4">
            <div class="contant11-top-bg">
                <div class="container">
                    <span class="subhny-title text-center mb-2">Contact Us</span>
                    <h3 class="hny-title text-center mb-md-5 mb-4">Get in touch with Us</h3>
                    <div class="d-grid contact section-gap">
                        <div class="contact-info-left d-grid text-center">
                            <div class="contact-info">
                                <span class="fa fa-map-marker" aria-hidden="true"></span>
                                <h4>Location</h4>
                                <p>Dolor sit, #PTH,8800 Honey Street UK.</p>
                            </div>
                            <div class="contact-info">
                                <span class="fa fa-phone" aria-hidden="true"></span>
                                <h4>Phone</h4>
                                <p><a href="tel:+44 7834 857829">+22 123 984 434</a></p>
                                <p><a href="tel:+44 987 654 321">+44 123 984 439</a></p>
                            </div>
                            <div class="contact-info">
                                <span class="fa fa-envelope" aria-hidden="true"></span>
                                <h4>Email</h4>
                                <p><a href="mailto:mail@example.com" class="email">mail@example.com</a></p>
                                <p><a href="mailto:mail@example1.com" class="email">mail@example1.com</a></p>
                            </div>
                            <div class="contact-info">
                                <span class="fa fa-clock-o" aria-hidden="true"></span>
                                <h4>Working Hours</h4>
                                <p>Wednesday - Sunday</p>
                                <p>7:00 AM - 9:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-41-mian mt-5 pt-lg-5 pt-md-4">
                <div class="container">

                    <div class="form-inner-cont">
                        <form action="https://sendmail.w3layouts.com/submitForm" method="post" class="signin-form">
                            <div class="d-grid align-form-map">
                                <div class="form-input">
                                    <label for="w3lName">Name</label>
                                    <input type="text" name="w3lName" id="w3lName" placeholder="" />
                                </div>
                                <div class="form-input">
                                    <label for="w3lSender">Email(Required)*</label>
                                    <input type="email" name="w3lSender" id="w3lSender" placeholder="" required="" />
                                </div>
                                <div class="form-input">
                                    <label for="w3lSender">Subject*</label>
                                    <input type="text" name="w3lSubect" placeholder="" class="contact-input"/>
                                </div>
                                <div class="form-input">
                                    <label for="w3lSender">Phone Number*</label>
                                    <input type="number" name="w3lPhone" placeholder="" class="contact-input"/>
                                </div>
                            </div>
                            <div class="form-input">
                                <label for="w3lMessage">Message(Required)*</label>
                                <textarea placeholder="" name="w3lMessage" id="w3lMessage" required=""></textarea>
                            </div>
                            <div class="submit text-right">
                                <button type="submit" class="btn btn-primary btn-style">Submit Message</button>
                            </div>
                        </form>


                    </div>
                    <div class="map mt-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
                            frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            </div>
    </section>
      </React.Fragment>
    )
  }
}

export default ContactUs