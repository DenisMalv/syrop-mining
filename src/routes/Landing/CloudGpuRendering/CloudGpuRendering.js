import React from "react";
import ContactUs from "../ContactUs";

import { SectionFuturesTwo } from "../../../components/landing/SectionFuturesTwo";
import { SectionPromo } from "../../../components/landing/SectionPromo";
import FirstImage from '../../../assets/img/promo-image--8.jpg'
import SecondImage from '../../../assets/img/promo--image-8.jpg'


export const CloudGpuRendering = () => {
    return (
        <div className="wrapper pt-header">
            <main className="content">
                <SectionPromo
                    firstTitle={"Cloud GPU Rendering"} 
                    firstText={"Machine learning is progressing towards powerful AI with the potential to radically reshape the future."} 
                    firstImage={FirstImage} 
                    secondTitle={"Features of Cloud GPU Rendering"} 
                    secondSubTitle={"Learn more about cloud GPU rendering"} 
                    secndTextPartOne={"Cloud GPU rendering is a great way to render high-quality 3D graphics or animations. It allows you to use the power of a remote server to render your graphics, which means you can get the same quality as if you were using a local desktop machine. The only difference is that you don't have to worry about the initial cost or maintenance of a performance desktop or server at home or in the office."}
                    secndTextPartTwo={`Cloud GPU rendering is growing in popularity, as it offers a number of advantages over traditional desktop rendering. Perhaps the most significant advantage is that it's much cheaper to get started with cloud GPU rendering than it is to buy and maintain a high-end desktop machine.`}
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