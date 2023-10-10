import React,{useState,useEffect, useRef} from 'react'
import {Link,NavLink,useLocation} from "react-router-dom";
import SignedInMenu from './SignedInMenu';

import { useClickOutside } from '../../helpers/useClickOutside';

import {ReactComponent as IcoLogo} from '../../assets/img/logo_landing.svg'
import {ReactComponent as IcoArrowDown} from '../../assets/img/ico-arrowdown2.svg'
import {ReactComponent as IcoAIGenerativeArt} from '../../assets/img/icon-edit-create.svg'
import {ReactComponent as IcoAIGenerativeText} from '../../assets/img/icon-text-star.svg'
import {ReactComponent as IcoSupport} from '../../assets/img/icon-support.svg'
import {ReactComponent as IcoCryptoMining} from '../../assets/img/icon-ethereum.svg'
import {ReactComponent as IcoCloud} from '../../assets/img/icon-cloud.svg'
import {ReactComponent as IcoGPU} from '../../assets/img/icon-chip.svg'

const Header = ({isLogin,setIsLogin,headerRef}) =>{
    const location = useLocation()

	const dropRef=useRef(null)
	const [isDropdown,setIsDropdown]=useState(false)
    useClickOutside(dropRef,setIsDropdown,);

    const navigationOnPage = (hash,value)=>{
            window.scrollTo({top: 0,behavior: "smooth"})
            if(location.hash === hash){
                window.scrollTo({top: value,behavior: "smooth"})
            }
    }

    useEffect(()=>{
        setTimeout(()=>{
            if(location.pathname==='/'){
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
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="header__body">
                    <Link to='/' className="logo header__logo">
                       <IcoLogo/>
                    </Link>
                    <nav className="header__menu">
                        <ul className="header__list" >
                            <li className={`header-select ${isDropdown ? "active" : ''}`} data-select="" ref={dropRef} onClick={()=>setIsDropdown(!isDropdown)}>
                                <button className="header__link" data-select-btn="">
                                    <span data-select-current="">Features</span>
                                    <span className="select-arrow">
										<IcoArrowDown/>
                            		</span>
                                </button>
                                <div className="select--body w-170 --left" data-select-drop=""
                                         style={{top: "104px", left: "302.938px"}}>
                                <ul className="select--body list-select custom-list-row" data-select-drop="">
                                    <li>
                                        <NavLink to='/ai-art' className="list-dropdown--link btn current" data-select-option="">
                                           <span className="icon-link">
												<IcoAIGenerativeArt/>
                                           </span>
                                            <span>AI Generative Art</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/ai-text' className="list-dropdown--link btn" data-select-option="">
                                       <span className="icon-link">
                                          <IcoAIGenerativeText/>
                                       </span>
                                            <span>AI Generative Text</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/customer-services" className="list-dropdown--link btn" data-select-option="">
                                       <span className="icon-link">
                                          <IcoSupport/>
                                       </span>
                                            <span>Automated Customer Service</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/gpu-crypto-mining' className="list-dropdown--link btn" data-select-option="">
                                       <span className="icon-link">
									   		<IcoCryptoMining/>
                                       </span>
                                            <span>GPU Crypto mining</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/cloud-gpu-rendering' className="list-dropdown--link btn" data-select-option="">
                                       <span className="icon-link">
									   		<IcoCloud/>
                                       </span>
                                            <span>Cloud GPU Rendering</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/gpu-for-deep-machine-learning' className="list-dropdown--link btn" data-select-option="">
                                       <span className="icon-link">
                                          <IcoGPU/>
                                       </span>
                                            <span>GPU for Deep Machine Learning</span>
                                        </NavLink>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li><NavLink to="/#how-it-works" className="header__link go-to" >How It Works</NavLink></li>
                            <li><NavLink to="/gpu-servers" className="header__link go-to">GPU Servers</NavLink></li>
                            <li><NavLink to="/#pricing" className="header__link go-to" >Pricing</NavLink></li>
                            <li><NavLink to="/#faq" className="header__link go-to" >FAQ</NavLink></li>
                            <li><NavLink to='/blog' className="header__link go-to">Blog</NavLink></li>
                            <li><NavLink to={`${location.pathname}#contact`} className="header__link go-to" >Contact Us</NavLink></li>
                        </ul>
                    </nav>
					{!isLogin &&
						<div className="header__buttons spase-nowrap">
							<Link to="/sign-up" className="btn radius-8 btn--outline btn--md">Sign Up</Link>
							<Link to="/login"  className="btn radius-8 btn--md btn--primary">Login</Link>
						</div>
					}
					{isLogin && <SignedInMenu setIsLogin={setIsLogin}/>}
                    <div className="header__burger">
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
