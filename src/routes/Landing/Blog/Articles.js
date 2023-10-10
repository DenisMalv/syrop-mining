import React from "react";

import ImgBlog1 from "../../../assets/imgLanding/img-blog1.png";
import ImgBlog2 from "../../../assets/imgLanding/img-blog2.png";
import ImgBlog3 from "../../../assets/imgLanding/img-blog3.png"
import ImgBlog4 from "../../../assets/imgLanding/img-blog4.png";
import { Link } from "react-router-dom";

export const Articles = () => {
    return (
        <div className="blog-top section">
            <div className="container container-lg">
                <h3 className="blog-top__title text-center">The Blog</h3>
                <div className="blog-top__list">
                    <Link to="/article" className="blog-top__list-left">
                        <div className="blog-top__list-left-img blog-img-wrap">
                            <img src={ImgBlog1} alt="blog" />
                        </div>
                        <div className="blog-top__list-date">January 24, 2022</div>
                        <h4 className="blog-top__list-title">What is the best GPU for mining crypto?</h4>
                        <p className="blog-top__list-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nisl, et turpis convallis accumsan, nullam. Nulla natoque ipsum interdum tempor augue
                            netus.</p>
                    </Link>
                    <div className="blog-top__list-right">
                        <Link to="/article" className="blog-top__list-right-item">
                            <div className="blog-top__list-right-img blog-img-wrap">
                                <img src={ImgBlog2} alt="blog" className="w-100" />
                            </div>
                            <div className="blog-top__list-right-text">
                                <div className="blog-top__list-date">January 24, 2022</div>
                                <h4 className="blog-top__list-title">Why GPU are better than CPU for mining?</h4>
                            </div>
                        </Link>

                        <Link to="/article" className="blog-top__list-right-item">
                            <div className="blog-top__list-right-img blog-img-wrap">
                                <img src={ImgBlog3} alt="blog" className="w-100" />
                            </div>
                            <div className="blog-top__list-right-text">
                                <div className="blog-top__list-date">January 24, 2022</div>
                                <h4 className="blog-top__list-title">What is the best GPU for machine learning?</h4>
                            </div>
                        </Link>
                        <Link to="/article" className="blog-top__list-right-item">
                            <div className="blog-top__list-right-img blog-img-wrap">
                                <img src={ImgBlog4} alt="blog" className="w-100" />
                            </div>
                            <div className="blog-top__list-right-text">
                                <div className="blog-top__list-date">January 24, 2022</div>
                                <h4 className="blog-top__list-title">How do we protect Your data from providers?</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="circle-bg blue" style={{left: "-180px", top: "225px"}}></div>
            <div className="circle-bg purple" style={{right:" -180px", top: "225px"}}></div>
        </div>
    )
}
