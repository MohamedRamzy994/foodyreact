import React, { Component } from 'react'
import Banner from '../banner/banner';
import OnlineOrder from '../onlineOrder/onlineOrder';
import FasterThanLight from '../fasterThanLight/fasterThanLight';
import FastterIsBetter from '../fastterIsBetter/fastterIsBetter';
import Testominals from '../testominals/testominals';
import OurProjects from '../ourProjects/ourProjects'
export class Home extends Component {
  render() {
    return (
      <div>
     
      <Banner></Banner>
      <OurProjects></OurProjects>
      <OnlineOrder></OnlineOrder>
      <FasterThanLight></FasterThanLight>
      <FastterIsBetter></FastterIsBetter>
      <Testominals></Testominals>
     

      </div>
    )
  }
}

export default Home