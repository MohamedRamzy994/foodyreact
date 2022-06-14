import React, { Component } from 'react'

export class AboutBreadcrumb extends Component {
  render() {
    return (
        <section class="w3l-about-breadcrumb text-left">
        <div class="breadcrumb-bg breadcrumb-bg-about py-3">
          <div class="container grid-breadcrumb">
            <ul class="breadcrumbs-custom-path mt-md-2">
              <li><a href="index.html">Home</a></li>
              <li class="active"><span class="fa fa-angle-double-right mx-2" aria-hidden="true"></span> About Us </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default AboutBreadcrumb