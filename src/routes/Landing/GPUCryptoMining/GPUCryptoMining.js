import React from "react";
import ContactUs from "../ContactUs";


import { SectionFuturesTwo } from "../../../components/landing/SectionFuturesTwo";
import { SectionPromo } from "../../../components/landing/SectionPromo";
import FirstImage from '../../../assets/img/promo-image--6.jpg'
import SecondImage from '../../../assets/img/promo--image-7.jpg'

export const GPUCryptoMining = () => {
    return (
        <div className="wrapper pt-header">
            <main className="content">
                <SectionPromo 
                firstTitle={"GPU Crypto mining"} 
                firstText={"Machine learning is progressing towards powerful AI with the potential to radically reshape the future."} 
                firstImage={FirstImage} 
                secondTitle={"Features of GPU Crypto Mining"} 
                secondSubTitle={"Learn more about GPU crypto mining"} 
                secndTextPartOne={"Since the 2017 crypto gold rush, miners and gamers have butted heads over their predilection for the most performant GPUs. High demand led to shortages and price gouging, making an expensive hobby even more dear."}
                secndTextPartTwo={"As the crypto craze cooled—and desktop miners got muscled out by huge ASICs farms—the market flooded with cheap, second-hand GPUs from remorseful investors. Despite the newfound surplus, gamers got wary that those cards might be practically worthless due to hardware degradation."}
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