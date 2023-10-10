import React from "react";
import ContactUs from "../ContactUs";

import { SectionFuturesTwo } from "../../../components/landing/SectionFuturesTwo";
import { SectionPromo } from "../../../components/landing/SectionPromo";
import FirstImage from '../../../assets/img/promo-image--1.jpg'
import SecondImage from '../../../assets/img/promo--image-3.jpg'


export const AIGenerativeArt = () => {
    return (
        <div className="wrapper pt-header">
            <main className="content">
                <SectionPromo 
                    firstTitle={"AI Generative Art"} 
                    firstText={`Machine learning is progressing towards powerful AI
                    with the potential to radically reshape the future.`} 
                    firstImage={FirstImage} 
                    secondTitle={`Features of AI Generative Art`} 
                    secondSubTitle={"Learn more about AI generative art"} 
                    secndTextPartOne={`Did you know that artificial intelligence can be used to create some pretty
                        amazing artwork? It's true! AI-generated art is called "generative art" and it
                        can be used to create all sorts of interesting and beautiful images.
                        This awesome image of a castle overlooking a pond was generated using nothing
                        but a short text blurb!`}
                    secndTextPartTwo={`So how does it work? Well, generative art typically involves feeding a computer
                    algorithm lots of data, which the algorithm then uses to generate new, original
                    artwork. The results can be pretty impressive,
                    and they often look quite different from anything that a human artist could
                    create.`}
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