import React,{useState,useEffect}from 'react'
import { Link,useLocation } from 'react-router-dom'

import {ReactComponent as IcoLogo} from '../../assets/img/logo_landing.svg';
import IcoDiscord from '../../assets/imgLanding/ic_outline-discord.svg';

const Footer = () =>{
    const location = useLocation()

    const navigationOnPage = (hash,value)=>{
        window.scrollTo({top: 0,behavior: "smooth"})
        if(location.hash === hash){
            window.scrollTo({top: value,behavior: "smooth"})
        }
}

    useEffect(()=>{
        setTimeout(()=>{
            if(location.pathname==='/'){
                if(location.hash === "#features"){
                    window.scrollTo({top: 500,behavior: "smooth"})
                }
                if(location.hash === "#how-it-works"){
                    window.scrollTo({top: 1600,behavior: "smooth"})
                }
                if(location.hash === "#pricing"){
                    window.scrollTo({top: 2240,behavior: "smooth"})
                }
                if(location.hash === "#faq"){
                    window.scrollTo({top: 2940,behavior: "smooth"})
                }
                if(location.hash === "#contact"){
                    window.scrollTo({top: 3500,behavior: "smooth"})
                }
            }
            if(location.pathname==='/gpu-servers' || location.pathname==='/blog' || location.pathname==='/ai-text' || location.pathname==='/customer-services'
            || location.pathname==='/gpu-crypto-mining' || location.pathname==='/cloud-gpu-rendering' || location.pathname==='/cloud-gpu-rendering' || location.pathname==='/gpu-for-deep-machine-learning'){
                navigationOnPage("#contact",3500)
            }
    },5)
    },[location])

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-body">
                        <Link to='/' className="logo footer-logo" onClick={()=>{window.scrollTo({top: 0,behavior: "smooth"})}}>
                            <IcoLogo/>
                        </Link>
                        <nav className="footer-menu">
                            <ul className="header__list">
                                <li><Link to="/#features" className="header__link go-to">Features</Link></li>
                                <li><Link to="/#how-it-works" className="header__link go-to">How It Works</Link></li>
                                <li><Link to="/#pricing" className="header__link go-to">Pricing</Link></li>
                                <li><Link to="/#faq" className="header__link go-to">FAQ</Link></li>
                                <li><Link to={`${location.pathname}#contact`} className="header__link go-to">Contact Us</Link></li>
                            </ul>
                        </nav>
                        <div className="header__buttons">
                            <a href="" className="btn radius-8 btn--outline btn--md">
                                <span>Discord Server</span>
                                <span className="btn-icon">
                                    <img src={IcoDiscord} alt=""/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-body">
                        <p className="footer-copy">© 2022 vast.ai. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
