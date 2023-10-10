import React from 'react'

import videocard from '../../assets/img/videocard.png'
import imageKey from '../../assets/img/image-key.png'
import imageSecurity from '../../assets/img/image-security.png'

const Promo = () =>{
    return (
        <section id="promo" className="section-100 relative">
            <div className="container container-lg">
                <div className="container-718 text-center">
                    <h1 className="heading heading-h1">Instant access to the best GPU in the market</h1>
                    <div className="mt-30">
                        <p className="default--text fs-18 lh-30">Whether you need GPU power to accelerate graphic
                            rendering,
                            machine learning, video editing, or data analysis – HashMarket will provide it with the best
                            price and accessibility.
                        </p>
                    </div>
                    <div className="mt-40">
                        <a href="#" className="btn radius-8 btn--lg btn--primary">
                            <span className="info fs-16 lh-22">Get Started</span>
                        </a>
                    </div>
                </div>
                <div className="section-100" id="features">
                    <div className="columns columns-15">
                        <div className="col-12">
                            <div className="card card--row">
                                <div className="card--image flex-50 bg--black p-20">
                                    <img src={videocard} alt="" />
                                </div>
                                <div className="card--info py-68 px-40">
                                    <h3 className="heading heading-h3">Host your GPU and earn money</h3>
                                    <div className="mt-15">
                                        <p className="default--text">
                                            If you have powerfull GPU you can host it on our marketplace to earn money
                                            for it.
                                            Use our dashboard to control prices, hosted GPUs and your income.
                                        </p>
                                    </div>
                                    <div className="mt-30">
                                        <a href="#" className="btn radius-8 btn--outline btn--lg">
                                            <span className="info fs-16 lh-22">Host GPU</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card mt-30">
                                <div className="card--image bg--black p-20 mh-330">
                                    <img src={imageKey} alt="" />
                                </div>
                                <div className="card--info py-30 px-40">
                                    <h3 className="heading heading-h3">Host your GPU and earn money</h3>
                                    <div className="mt-15">
                                        <p className="default--text">
                                            If you have powerfull GPU you can host it on our marketplace to earn money
                                            for it.
                                            Use our dashboard to control prices, hosted GPUs and your income.
                                        </p>
                                    </div>
                                    <div className="mt-30">
                                        <a href="#" className="btn radius-8 btn--outline btn--lg">
                                            <span className="info fs-16 lh-22">Host GPU</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card mt-30">
                                <div className="card--image bg--black p-20 mh-330">
                                    <img src={imageSecurity} alt="" />
                                </div>
                                <div className="card--info py-30 px-40">
                                    <h3 className="heading heading-h3">Personal dashboard for your needs</h3>
                                    <div className="mt-15">
                                        <p className="default--text">
                                            Our dashshboard help you to rent or host your GPUs,
                                            set special tasks for your GPU, hub with tutorials will help to start using
                                            HashMarket.
                                        </p>
                                    </div>
                                    <div className="mt-30">
                                        <a href="#" className="btn radius-8 btn--outline btn--lg">
                                            <span className="info fs-16 lh-22">Get Started</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle-bg blue" style={{left: "-180px",top: "225px"}}></div>
            <div className="circle-bg purple" style={{right: "-180px", top: "225px"}}></div>
        </section>
    )
}

export default Promo
