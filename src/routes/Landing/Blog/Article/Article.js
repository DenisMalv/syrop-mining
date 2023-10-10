import React from "react";
import { ArticlePromo } from "./ArticlePromo";
import { ArticleBody } from "./ArticleBody";
import { PopularArticles } from "../PopularArticles";
import ContactUs from "../../ContactUs";

export const Article = () => {
    return (
        <main className="content">
            <ArticlePromo />
            <ArticleBody />
            <PopularArticles />
            <ContactUs />
        </main>
    )
}
