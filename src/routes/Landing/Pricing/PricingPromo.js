import React from "react";

export const PricingPromo = () => {
    return (
        <section id="promo" className="section-50 relative pricing-page">
            <div className="container container-lg">
                <div className="container-718 text-center">
                    <h2 className="heading heading-h2 mb-20">GPU Instance Pricing</h2>
                    <div className="mb-30">
                        <p className="default--text fs-18 lh-30">
                            RunPod prices are 8 times cheaper<br />
                            than other cloud providers.
                        </p>
                    </div>
                    <div className="mb-10">
                        <a href="#" className="btn radius-8 btn--lg btn--primary">
                            <span className="info fs-16 lh-22">Get Started</span>
                        </a>
                    </div>
                </div>

            </div>
            <div className="circle-bg blue" style={{left: "-180px", top: "225px"}}></div>
            <div className="circle-bg purple" style={{right: "-180px", top: "225px"}}></div>
        </section>
    )
}
