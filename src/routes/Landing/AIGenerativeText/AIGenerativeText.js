import React from "react";
import ContactUs from "../ContactUs";


import { SectionFuturesTwo } from "../../../components/landing/SectionFuturesTwo";
import { SectionPromo } from "../../../components/landing/SectionPromo";
import FirstImage from '../../../assets/img/promo-image--3.jpg'
import SecondImage from '../../../assets/img/promo--image-4.jpg'

export const AIGenerativeText = () => {
    return (
        <main className="content">
            <SectionPromo
                firstTitle={"AI Generative Text"} 
                firstText={"Machine learning is progressing towards powerful AI with the potential to radically reshape the future."} 
                firstImage={FirstImage} 
                secondTitle={"Features of AI Generative Text"} 
                secondSubTitle={"Learn more about AI generative text"} 
                secndTextPartOne={`AI text generation is a really cool way to create unique and interesting content. By using artificial intelligence, you can create texts that are not only grammatically correct, but also have their own voice and style. This means that you can create content that is truly your own, and that will stand out from the rest. There are many different applications for ai text generation; you can use it for anything from creating marketing materials to writing fictional novels with your favorite characters.`}
                secndTextPartTwo={"If you're looking for a way to overcome your writers block, or to simply have some fun with language, then ai text generation is definitely something you should check out. Who knows, you might just find your new favourite way to create content!"}
                secondImage={SecondImage}
            />
            <SectionFuturesTwo />
            <ContactUs />
        </main>
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