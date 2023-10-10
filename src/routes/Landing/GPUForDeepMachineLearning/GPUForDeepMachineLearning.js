import React from "react";
import ContactUs from "../ContactUs";

import { SectionFuturesTwo } from "../../../components/landing/SectionFuturesTwo";
import { SectionPromo } from "../../../components/landing/SectionPromo";
import FirstImage from '../../../assets/img/promo-image--9.jpg'
import SecondImage from '../../../assets/img/promo--image-10.jpg'

export const GPUForDeepMachineLearning = () => {
    return (
        <div className="wrapper pt-header">
            <main className="content">
                <SectionPromo
                firstTitle={"GPU for deep machine learning"} 
                firstText={"Machine learning is progressing towards powerful AI with the potential to radically reshape the future."} 
                firstImage={FirstImage} 
                secondTitle={"Features of GPU for Deep Machine Learning"} 
                secondSubTitle={"Learn more about GPU for deep machine learning"} 
                secndTextPartOne={"GPUs are helping to accelerate drug discovery by providing the power and speed needed to process large amounts of data. By using GPUs to run simulations and process data, scientists can shorten the time it takes to develop new drugs. Additionally, GPUs can be used to create virtual models of molecules, which can help researchers understand how a molecule will interact with other molecules in the body. This information can be used to design better drugs that are more effective and have fewer side effects."}
                secndTextPartTwo={""}
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
// firstTitle={""} 
// firstText={""} 
// firstImage={} 
// secondTitle={""} 
// secondSubTitle={""} 
// secndTextPartOne={""}
// secndTextPartTwo={""}
// secondImage={}
// />
// <SectionFuturesTwo />