import React from "react";
import { useNavigate } from "react-router-dom";

import GTX1080Ti from "../../../../assets/imgLanding/single-page-img.png";

export const GPUInstanceGood = () => {
    const navigate = useNavigate();
    return (
        <section className="section relative">
            <div className="circle-bg blue" style={{left: "-180px", top: "95px"}}></div>
            <div className="circle-bg purple" style={{right: "-180px", top: "95px"}}></div>
            <div className="container">
                <div className="single-page">
                    <button className="btn radius-8 btn--outline btn--md" onClick={() => navigate(-1)}>Back</button>
                    <div className="columns columns-25 items-center">
                        <div className="col-6">
                            <div className="single-page-img">
                                <img src={GTX1080Ti} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="single-page-content">
                                <h3 className="section-title mb-30 font-600">NVIDIA GeForce GTX 1080 Ti</h3>
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
