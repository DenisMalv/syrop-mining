import React from "react";

import ContactUs from "../ContactUs";
import { Articles } from "./Articles";
import { PopularArticles } from "./PopularArticles";

export const Blog = () => {
    return (
        <div className="wrapper pt-header">
            <main className="content">
                <Articles />
                <PopularArticles />
                <ContactUs />
            </main>
        </div>
    )
}
