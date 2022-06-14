import React, { Component } from 'react'
import AboutBreadcrumb from '../aboutBreadcrumb/aboutBreadcrumb'
import AboutContent from '../aboutContent/aboutContent'
import FastterIsBetter from '../fastterIsBetter/fastterIsBetter'
import AboutTeam from '../aboutTeam/aboutTeam'
export class About extends Component {
  render() {
    return (
      <React.Fragment>
          <AboutBreadcrumb></AboutBreadcrumb>
          <AboutContent></AboutContent>
          <FastterIsBetter></FastterIsBetter>
          <AboutTeam></AboutTeam>
        
      </React.Fragment>
    )
  }
}

export default About