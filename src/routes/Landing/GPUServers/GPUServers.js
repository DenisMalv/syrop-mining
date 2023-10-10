import React from "react";
import Header from "../Header";
import { ServersPromo } from "./ServersPromo";
import { ServersGoods } from "./ServersGoods";
import ContactUs from "../ContactUs";

export const GPUServers = () => {
    return (
        <div className="wrapper pt-header">
            <main className="content">
                <Header />
                <ServersPromo />
                <div className="container container-lg">
                    <ServersGoods />
                </div>
                <ContactUs />
            </main>
        </div>
    )
}
