import React from "react";
import ContactUs from "../ContactUs";


import { SectionFuturesTwo } from "../../../components/landing/SectionFuturesTwo";
import { SectionPromo } from "../../../components/landing/SectionPromo";
import FirstImage from '../../../assets/img/promo-image--5.jpg'
import SecondImage from '../../../assets/img/promo--image-6.jpg'

export const AutomatedCustomerService = () => {
    return (
        <div className="wrapper pt-header">
            <main className="content">
                <SectionPromo
                firstTitle={"Automated Customer Service"} 
                firstText={"Machine learning is progressing towards powerful AI with the potential to radically reshape the future."} 
                firstImage={FirstImage} 
                secondTitle={"Features of Automated Customer Service"} 
                secondSubTitle={"Learn more about automated customer service"} 
                secndTextPartOne={"When it comes to customer service, AI has the potential to revolutionize the way businesses operate. By automating various customer service tasks, AI can help businesses save money and provide better service. For example, AI can be used to automate repetitive tasks such as answering commonly asked questions or providing basic customer support. This frees up customer service representatives to handle more complex inquiries, resulting in improved customer satisfaction."}
                secondImage={SecondImage}
                />
                <SectionFuturesTwo />
                <ContactUs />
            </main>
        </div>
    )
}



// import { SectionFuturesTwo } from "../../../components/landing/SectionFuturesTwo";
// import { SectionPromo } from "../../../components/landing/SectionPromo";
// import FirstImage from '../../../assets/img/promo-image--1.jpg'
// import SecondImage from '../../../assets/img/promo--image-3.jpg'

// <SectionPromo 
// firstTitle={} 
// firstText={} 
// firstImage={} 
// secondTitle={} 
// secondSubTitle={} 
// secndTextPartOne={}
// secndTextPartTwo={}
// secondImage={}
// />
// <SectionFuturesTwo />