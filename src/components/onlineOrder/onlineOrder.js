import React, { Component } from 'react'
export class OnlineOrder extends Component {
  render() {
    return (
        <section class="w3l-bottom-grids-6 py-5">
        <div class="container py-lg-5 py-md-4">
            <span class="subhny-title text-center mb-2">Online Order</span>
            <h3 class="hny-title text-center mb-5">How it works?</h3>
            <div class="grids-area-hny main-cont-wthree-fea row">
                <div class="col-lg-4 col-md-6 grids-feature">
                    <div class="area-box">
                        <span class="fa fa-mobile"></span>
                        <h4><a href="#feature" class="title-head">Online Food Ordering</a></h4>
                        <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus
                            orci.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                    <div class="area-box box-active">
                        <span class="fa fa-gift"></span>
                        <h4><a href="#feature" class="title-head">Food Delivery</a></h4>
                        <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus
                            orci.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                    <div class="area-box">
                        <span class="fa fa-building-o"></span>
                        <h4><a href="#feature" class="title-head">Drive in Restaurant</a></h4>
                        <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus
                            orci.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}

export default OnlineOrder