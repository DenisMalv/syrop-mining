import React from "react";
import ContactUs from "../ContactUs";
import { PricingPromo } from "./PricingPromo";
import { PricingTable } from "./PricingTable";

export const Pricing = () => {
    return (
        <div className="wrapper pt-header gpu-instance-pricing">
            <main className="content">
                <PricingPromo />
                <PricingTable />
                <ContactUs />
            </main>
        </div>
    )
}
