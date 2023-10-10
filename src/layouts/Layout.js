// import {useState, useRef, useEffect} from 'react'
// import { useLocation } from 'react-router-dom'

// import "../assets/cssLanding/components/components.css"
// import "../assets/cssLanding/plagins/choices.css"
// import '../assets/cssLanding/bootstrap-grid.css'
// import '../assets/cssLanding/global.css'
// import '../assets/cssLanding/main-alpha.css'
// import '../assets/cssLanding/main-bravo.css'
// import '../assets/cssLanding/main-charlie.css'
// import '../assets/cssLanding/main-delta.css'
// import '../assets/cssLanding/media-alpha.css'
// import '../assets/cssLanding/media-bravo.css'
// import '../assets/cssLanding/media-charlie.css'
// import '../assets/cssLanding/media-delta.css'
// import '../assets/cssLanding/reset.css'
// import '../assets/cssLanding/react.css'
// import { Outlet } from "react-router-dom"

// import Header from "../routes/Landing/Header"
// import Footer from "../routes/Landing/Footer"

// import bg from '../assets/img/body-bg.png'

// const Layout = ({isLogin,setIsLogin})=>{
//     const headerRef = useRef(null)
//     const howItWorksRef = useRef(null)
//     const pricingRef = useRef(null)
//     const faq = useRef(null)
//     const contact = useRef(null)
//     const [scrollToTopButtonVisible, setScrollToTopButtonVisible] = useState(false);
//     const location = useLocation();
//     const body = document.querySelector("body");

//     useEffect(() => {
//         window.addEventListener("scroll", checkDistance);
//         return () => {
//             window.removeEventListener("scroll", checkDistance);
//         };
//     }, [])

//     const checkDistance = () => {
//         window.scrollY > 5 ? headerRef.current.classList.add("header-scroll") : headerRef.current.classList.remove("header-scroll")
//         if(window.scrollY > 100) {
//             setScrollToTopButtonVisible(true);
//         } else {
//             setScrollToTopButtonVisible(false);
//         }
//     }
//     const handleScrollToTop = () => {
//         body.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//             inline: 'center',
//         })
//     }

//     return <div className={`landing ${location && location.pathname === '/' ? "bg-image" : ""}`}>
//                 <Header isLogin={isLogin} setIsLogin={setIsLogin} headerRef={headerRef} handleScroll={handleScrollToTop}/>
//                 <div className={`wrapper pt-header`}>
//                     <Outlet howItWorksRef={howItWorksRef}/>
//                 </div>
//                 <div className="noise-bg-wrapper">
//                     <div className="noise-bg"></div>
//                 </div>
//                 <button className={`scroll_to_top ${scrollToTopButtonVisible ? "active" : ""}`} onClick={() => handleScrollToTop()} />
//                 <Footer/>
//                 <div id="modal-1" className="modal modal-1">
//                     <div className="modal__dialog modal__dialog--500">
//                         <div className="modal__content">
//                             <div className="modal__header">
//                                 <h2 className="modal__header-title">Modal title</h2>
//                                 <a href="#" className="btn btn-close" data-close-modal="">
//                                     <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M5 5L25 25" stroke="#04DFD7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                                         <path d="M25 5L5 25" stroke="#04DFD7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                                     </svg>
//                                 </a>
//                             </div>
//                             <div className="modal__body">
//                                 Modal Content
//                             </div>
//                             <div className="modal__footer">

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
// }

// export default Layout
