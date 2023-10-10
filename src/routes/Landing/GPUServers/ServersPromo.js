import React from "react";

import RTX3080 from "../../../assets/imgLanding/img-rtx-3080.png";
export const ServersPromo = () => {
    return (
        <section id="promo" className="relative">
            <div className="container container-lg">
                <div className="block--promo">
                    <div className="block--promo--info mt-100 col-promo d-flex flex-column">
                        <h1 className="heading heading-h22">GPU Instances</h1>
                        <div className="mt-20">
                            <p className="default--text fs-18 lh-30">GPU Servers Bare-Metal GPU Servers What GPU's do we
                                use?</p>
                        </div>
                        <div className="mt-30">
                            <a href="#" className="btn radius-8 btn--lg btn--primary w-100-576">
                                <span className="info fs-16 lh-22">Read More</span>
                            </a>
                        </div>
                    </div>
                    <div
                        className="block--promo--image block--promo--image--contain shape--after shape--before col-promo js-tilt"
                        style={{willChange: "transform", transform: "perspective(300px) rotateX(0deg) rotateY(0deg)"}}>
                        <img src={RTX3080} />
                    </div>
                </div>
            </div>
            <div className="circle-bg blue" style={{left: "-180px", top: "225px"}}></div>
            <div className="circle-bg purple" style={{right: "-180px", top: "225px"}}></div>
        </section>
    )
}
