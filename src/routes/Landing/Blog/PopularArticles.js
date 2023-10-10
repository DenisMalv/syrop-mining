import React from "react";

import ImgPopular1 from "../../../assets/imgLanding/img-popular1.png";
import ImgPopular2 from "../../../assets/imgLanding/img-popular2.png";
import ImgPopular3 from "../../../assets/imgLanding/img-popular3.png";
import {Link} from "react-router-dom";

const popularArticles = [
    {
        image: ImgPopular1,
        time_of_publication: "January 24, 2022",
        title: "Why GPU prices are so high? When they are going down?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, et turpis convallis accu..."
    },
    {
        image: ImgPopular2,
        time_of_publication: "January 24, 2022",
        title: "What GPUis equivalent to PS5 and Xbox Series X?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, et turpis convallis accu...",
    },
    {
        image: ImgPopular3,
        time_of_publication: "January 24, 2022",
        title: "AMD vs Nvidia: Who Makes the Best GPUs?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, et turpis convallis accu..."
    },
];

export const PopularArticles = () => {
    return (
        <div className="section">
            <div className="container container-lg">
                <h2 className="heading heading-h2 mb-50">Popular Articles</h2>
                <div className="columns columns-15">
                    {popularArticles.map(popularArticle => (
                        <Link to="/article" className="col-4 sm-mb-20">
                            <div className="mb-20 blog-img-wrap">
                                <img src={popularArticle.image} className="w-100" alt="img-popular" />
                            </div>
                            <div className="blog-top__list-date">{popularArticle.time_of_publication}</div>
                            <h4 className="blog-top__list-title">{popularArticle.title}</h4>
                            <p className="blog-top__list-text">{popularArticle.text}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
