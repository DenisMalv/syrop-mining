import React from "react";
import { useNavigate } from "react-router-dom";
import BlogPageImg1 from "../../../../assets/imgLanding/blog-page-img-1.png";

export const ArticlePromo = () => {
    const navigate = useNavigate();
    return (
        <section id="promo" className="section-50 mb-80 relative">
            <div className="container container-lg">
                <div className="relative radius-20">
                    <img src={BlogPageImg1} style={{width: "100%"}} />
                        <div className="img-text-group">
                            <button className="btn radius-8 btn--outline btn--md" onClick={() => navigate(-1)}>Back</button>
                            <span>January 24, 2022</span>
                        </div>
                </div>
            </div>
            <div className="circle-bg blue" style={{left: "-180px", top: "225px"}}></div>
            <div className="circle-bg purple" style={{right: "-180px", top: "225px"}}></div>
        </section>
    )
}
