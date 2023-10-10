import React, { useEffect } from 'react'
import { useState } from 'react'
import SidebarDecor from '../assets/img/sidebar-decor.png';
import SidebarDecor2 from '../assets/img/sidebar-decor-2.png';
import Logo from '../assets/img/logo.svg';
import LogoText from '../assets/img/logo-text.svg';
import { Link,useLocation } from 'react-router-dom';

import {ReactComponent as IcoHideSidebar} from '../assets/img/ico-scroll-left.svg'
import {ReactComponent as IcoShowSidebar} from '../assets/img/ico-scroll-right.svg'
import {ReactComponent as IcoMyAccount} from '../assets/img/my-account.svg'
import {ReactComponent as IcoCommandLine} from '../assets/img/browser-programming-code.svg'
import {ReactComponent as IcoCreditLimit} from '../assets/img/wallet-style-2-line.svg'
import {ReactComponent as IcoMarketPlace} from '../assets/img/cloud-storage-monitor.svg'
import {ReactComponent as IcoMyInstances} from '../assets/img/grid-layout.svg'
import {ReactComponent as IcoEarnings} from '../assets/img/money.svg'
import {ReactComponent as IcoMyHosts} from '../assets/img/server-computer-case.svg'
import {ReactComponent as IcoBackgroundTasks} from '../assets/img/crypto-currency-server.svg'
import {ReactComponent as IcoHowSetupHost} from '../assets/img/settings-filter-squre.svg'
import {ReactComponent as IcoDark} from '../assets/img/moon.svg'
import {ReactComponent as IcoLight} from '../assets/img/sun.svg'

const LeftNav = () => {
    const location = useLocation()
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [theme,setTheme]=useState(false)  // false = dark , true = light 

    const togleSidebar = ()=>{
        if(document.querySelector('aside.sidebar.scroll--style')){
            if(document.querySelector('aside.sidebar.scroll--style').classList.contains('sidebar--closed')){
                document.body.classList.remove('sidebar-collapsed')
                document.querySelector('aside.sidebar.scroll--style').classList.remove('sidebar--closed')
                document.querySelector('aside.sidebar.scroll--style').classList.add('sidebar--opened')
                if(document.querySelector('header.header')){
                    document.querySelector('header.header').classList.remove('menu-open')
                }
            }else{
                document.body.classList.add('sidebar-collapsed');
                document.querySelector('aside.sidebar.scroll--style').classList.add('sidebar--closed')
                document.querySelector('aside.sidebar.scroll--style').classList.remove('sidebar--opened')
            }
        }
    }

    const toggleTheme = ()=>{
        setTheme(!theme)
    }
    // const togleActive = (e) => {
    //     e.target.classList.toggle('active');
    //     console.log(e.target.classList);
    // }
    useEffect(()=>{
        console.log('width', window.innerWidth);
        if(window.innerWidth>=1200){
            togleSidebar()
        }else{
            document.body.classList.add('sidebar-collapsed');
        }
    },[])


    return (
        <aside className="sidebar scroll--style sidebar--closed">
            <div className="sidebar__wrapper">
            <div className="sidebar-decor" style={{left: "0", top: "0"}}>
                <img src={SidebarDecor}/>
            </div>
            <div className="sidebar-decor" style={{bottom: "0", right: "0"}}>
                <img src={SidebarDecor2}/>
            </div>
            <div className="sidebar__header">
                <a href="#" className="logo">
                    <img className="logo__img" src={Logo} alt="Hashmarket"/>
                    <img className="logo__text" src={LogoText} alt="Hashmarket"/>
                </a>
                <button type="button" className="sidebar__toggler" onClick={togleSidebar}>
                    <IcoHideSidebar/>
                </button>
            </div>
            <div className="sidebar__opener">
            <button type="button" className="sidebar__toggler" onClick={togleSidebar}>
                <IcoShowSidebar/>
            </button>
            </div>
            <div className="sidebar__body">
                <div className="sidebar__group">
                    <a href="#sidebar-item-01" className="sidebar__title">Menu</a>
                    <div id="sidebar-item-01" className="sidebar__body collapse show">
                        <ul className="sidebar__list">
                            <li className={`sidebar__item ${location.pathname === '/my-account' && "active"}`}>
                                <Link to={"/my-account"} className={`sidebar__link sidebar__link`} >
                                    <span className="sidebar__icon">
                                        <IcoMyAccount/>
                                    </span>
                                    <span className="sidebar__text">My Account</span>
                                </Link>
                            </li>
                            <li className={`sidebar__item ${location.pathname === '/command-line' && "active"}`}>
                                <Link to={"/command-line"} className="sidebar__link" >
                                    <span className="sidebar__icon">
                                        <IcoCommandLine/>
                                    </span>
                                    <span className="sidebar__text">Command Line</span>
                                </Link>
                            </li>
                            <li className={`sidebar__item ${location.pathname === '/credit-limit' && "active"}`}>
                                <Link to={"/credit-limit"} className="sidebar__link" >
                                    <span className="sidebar__icon">
                                        <IcoCreditLimit/>
                                    </span>
                                    <span className="sidebar__text">Credit Limit</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar__group">
                    <a href="#sidebar-item-02" className="sidebar__title">Client</a>
                    <div id="sidebar-item-02" className="sidebar__body collapse show">
                        <ul className="sidebar__list">
                            <li className={`sidebar__item ${location.pathname === '/marketplace' && "active"}`}>
                                <Link to={"/marketplace"} className="sidebar__link">
                                    <span className="sidebar__icon">
                                        <IcoMarketPlace/>
                                    </span>
                                    <span className="sidebar__text">Marketplace</span>
                                </Link>
                            </li>
                            <li className={`sidebar__item ${location.pathname === '/my-instances' && "active"}`}>
                                <Link to={"/my-instances"} className="sidebar__link">
                                    <span className="sidebar__icon">
                                        <IcoMyInstances/>
                                    </span>
                                    <span className="sidebar__text">My Instances</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar__group">
                    <a href="#sidebar-item-03" className="sidebar__title">Host</a>
                    <div id="sidebar-item-03" className="sidebar__body collapse show">
                        <ul className="sidebar__list">
                            <li className={`sidebar__item ${location.pathname === '/earnings' && "active"}`}>
                                <Link to={"/earnings"} className="sidebar__link">
                                    <span className="sidebar__icon">
                                        <IcoEarnings/>
                                    </span>
                                    <span className="sidebar__text">Earnings</span>
                                </Link>
                            </li>
                            <li className={`sidebar__item ${location.pathname === '/my-hosts' && "active"}`}>
                                <Link to={"/my-hosts"} href="#" className="sidebar__link">
                                    <span className="sidebar__icon">
                                        <IcoMyHosts/>
                                    </span>
                                    <span className="sidebar__text">My Hosts</span>
                                </Link>
                            </li>
                            <li className={`sidebar__item ${location.pathname === '/background-tasks' && "active"}`}>
                                <Link to={"/background-tasks"} className="sidebar__link">
                                    <span className="sidebar__icon">
                                        <IcoBackgroundTasks/>
                                    </span>
                                    <span className="sidebar__text">Background Tasks</span>
                                </Link>
                            </li>
                            <li className={`sidebar__item ${location.pathname === '/how-setup-host' && "active"}`}>
                                <Link to={'/how-setup-host'} className="sidebar__link">
                                    <span className="sidebar__icon">
                                       <IcoHowSetupHost/>
                                    </span>
                                    <span className="sidebar__text">How Setup Host</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sidebar__footer">
                <div className="open">
                    <a href="#" className={`btn ${theme ? "active" : '' }`} onClick={toggleTheme}>
                        <IcoLight/>
                        <span>Light</span>
                    </a>
                    <a href="#" className={`btn ${!theme ? "active" : '' }`} onClick={toggleTheme}>
                        <IcoDark/>
                        <span>Dark</span>
                    </a>
                </div>
                <div className="closed">
                    <a href="#" className="btn active" onClick={toggleTheme}>
                        <span style={{display: `${theme ? "flex" : "none"}`}} >
                            <IcoLight/>
                        </span>
                        <span style={{display: `${!theme ? "flex" : "none"}`}} >
                            <IcoDark/>
                        </span>
                    </a>
                </div>
            </div>
        </div>
</aside>
    )
}

export default LeftNav
