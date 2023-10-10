import React from 'react'

import pricingOne from '../../assets/img/pricing-1.png'
import pricingTwo from '../../assets/img/pricing-2.png'
import pricingThree from '../../assets/img/pricing-3.png'

const Pricing = () =>{
    return (
        <section className="section relative" id="pricing">
            <div className="circle-bg blue" style={{right: "-950px", top: "-592px"}}></div>
            <div className="container container-lg">
                <h2 className="section-title mb-12 text-center">Pricing</h2>
                <div className="section-subtitle mb-70 text-center">
                    <p>Check HashMarket pricing list</p>
                </div>
                <div className="pricing">
                    <div className="columns columns-37">
                        <div className="col-4">
                            <div className="pricing-item">
                                <div className="pricing-item__logo">
                                    <img src={pricingOne} alt="" />
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-list__item">
                                        <span>GPU:</span>
                                        <span className="text-white">4x RTX A6000</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>CPU:</span>
                                        <span className="text-white">Intel® CPU</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>Virtual Cores:</span>
                                        <span className="text-white">32/64 cpu</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>System Ram:</span>
                                        <span className="text-white">256 GB</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>TFLOPS:</span>
                                        <span className="text-white">180.6</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span className="text-white">On-demand Price:</span>
                                        <div className="pricing-list__item-col">
                                            <span className="text-white">$9.00/hr</span>
                                            <span className="small-size">5.5X More</span>
                                        </div>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span className="text-white">Interruptible Price:</span>
                                        <span className="text-white">N/A</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="pricing-item best-prise">
                                <span className="pricing-item__label">Best Price</span>
                                <div className="pricing-item__logo">
                                    <img src={pricingTwo} alt="" />
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-list__item">
                                        <span>GPU:</span>
                                        <span className="text-white">4x RTX A6000</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>CPU:</span>
                                        <span className="text-white">Intel® CPU</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>Virtual Cores:</span>
                                        <span className="text-white">32/64 cpu</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>System Ram:</span>
                                        <span className="text-white">256 GB</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>TFLOPS:</span>
                                        <span className="text-white">180.6</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span className="text-white">On-demand Price:</span>
                                        <div className="pricing-list__item-col">
                                            <span className="text-success">$1.61/hr</span>
                                            <span className="small-size">400-550% Savings!</span>
                                        </div>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span className="text-white">Interruptible Price:</span>
                                        <span className="text-success">$0.80/hr</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="pricing-item">
                                <div className="pricing-item__logo">
                                    <img src={pricingThree} alt="" />
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-list__item">
                                        <span>GPU:</span>
                                        <span className="text-white">4x RTX A6000</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>CPU:</span>
                                        <span className="text-white">Intel® CPU</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>Virtual Cores:</span>
                                        <span className="text-white">32/64 cpu</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>System Ram:</span>
                                        <span className="text-white">256 GB</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span>TFLOPS:</span>
                                        <span className="text-white">180.6</span>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span className="text-white">On-demand Price:</span>
                                        <div className="pricing-list__item-col">
                                            <span className="text-white">$9.00/hr</span>
                                            <span className="small-size">5.5X More</span>
                                        </div>
                                    </li>
                                    <li className="pricing-list__item">
                                        <span className="text-white">Interruptible Price:</span>
                                        <span className="text-white">N/A</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
