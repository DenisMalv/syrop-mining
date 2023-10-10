// import React from "react";
// import Tilt from 'react-parallax-tilt';

// export const SectionPromo = ({firstTitle,firstSubTitle,firstText,firstImage, secondTitle,secondSubTitle,secndTextPartOne, secndTextPartTwo,secondImage}) => {
//     return (
//         <section id="promo" className="relative">
//             <div className="container container-lg">
//                 <div className="block--promo">
//                     <div className="block--promo--info mt-100 col-promo d-flex flex-column">
//                         <h1 className="heading heading-h22">AI Generative Art{firstTitle}</h1>
//                         <div className="mt-20">
//                             <p className="default--text fs-18 lh-30">{firstText}
//                             </p>
//                         </div>
//                         <div className="mt-30">
//                             <a href="#" className="btn radius-8 btn--lg btn--primary w-100-576">
//                                 <span className="info fs-16 lh-22">Read More</span>
//                             </a>
//                         </div>
//                     </div>
//                     <Tilt 
//                         className="block--promo--image shape--after shape--before col-promo js-tilt"
//                         scale={ 1.006 } perspective={ 10000 }
//                     >
//                         <div className="wrapper--image r-20">
//                             <img src={firstImage} alt={firstTitle}/>
//                         </div>
//                     </Tilt>
//                 </div>
//                 <div className="section-100" id="features-1">
//                     <div className="columns columns-15">
//                         <div className="col-12 text-center">
//                             <h2 className="heading heading-h2 fw-600">{secondTitle}</h2>
//                             <div className="mt-12">
//                                 <p className="default--text fs-18 lh-30">{secondSubTitle}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="block--promo">
//                         <div className="mt-50 col-promo">
//                             <Tilt 
//                                 className="wrapper--image js-tilt r-20 w-550 h-400 border"
//                                 scale={ 1.006 } perspective={ 10000 }
//                             >
//                                 <img src={secondImage} alt={secondTitle}/>
//                             </Tilt>
//                         </div>
//                         <div className="block--promo--info col-promo mt-50 d-flex flex-column">
//                             <div className="mt-20">
//                                 <div className="dbl-p">
//                                     {secndTextPartOne && <p className="default--text">{secndTextPartOne}</p>}
//                                     {secndTextPartTwo && <p className="default--text">{secndTextPartTwo}</p>}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="circle-bg blue" style={{left: "-180px", top: "225px"}}></div>
//             <div className="circle-bg purple" style={{right: "-180px", top: "225px"}}></div>
//         </section>
//     )
// }
