import React,{useEffect,useState,useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import  {ReactComponent as IcoWallet} from '../assets/img/icon-wallet.svg'
import  {ReactComponent as IcoDownload} from '../assets/img/icon-download.svg'
import  {ReactComponent as IcoQuestion} from '../assets/img/icon-question.svg'
import  {ReactComponent as IcoBell} from '../assets/img/icon-bell.svg'
import  {ReactComponent as IcoAvatar} from '../assets/img/icon-user.svg'

import { DropdownSupport } from './Header/DropdownSupport'
import { Notifications } from './Header/Notifications'

import { searchGPUByName } from "../redux/marketplace/marketplace-slice";

const Header = () => {
    const supportButton = useRef(null)
    const notificationsButton = useRef(null)
    //STATE
    const[dropSupport,setDropSupport]=useState(false);
    const[dropNotifications,setDropNotifications]=useState(false);
    const[menuOpen, setMenuOpen] = useState(false);
    const toggleMenuOpen=()=>{
        if(document.querySelector('header.header').classList.contains('menu-open')){
            document.querySelector('header.header').classList.remove('menu-open')
            document.querySelector('body').classList.remove('ovh')
        }else{
            document.querySelector('header.header').classList.add('menu-open')
            document.querySelector('body').classList.add('ovh')
            // close sidebar
            if(document.querySelector('aside.sidebar.scroll--style')){
                document.body.classList.add('sidebar-collapsed');
                document.querySelector('aside.sidebar.scroll--style').classList.add('sidebar--closed')
                document.querySelector('aside.sidebar.scroll--style').classList.remove('sidebar--opened')
            }
        }
    }

    const[searchString, setSearchString] = useState('');

    // const marketplaceHosts = useSelector(state => state.marketplase.acordeonMutatedArray);

    // useEffect(()=>{
    //     console.log('marketplaceHosts:', marketplaceHosts);
    // },[])

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const headerSearch = (e) => {
        e.preventDefault();
        dispatch(searchGPUByName(`${e.target[0].value}`));
        navigate(`/marketplace`);
    }

    const searchReset = (e) => {
        e.preventDefault();
        setSearchString('');
        dispatch(searchGPUByName(''));
    }
    
    return (
        <header className={`header ${menuOpen ? 'menu-open' : ''}`} data-mobile-menu style={{backgroundColor:"#080116"}}>
            <div className="header__menu-icon" data-mobile-menu--btn="" onClick={toggleMenuOpen}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header__wrap">
                <form className="header__search relative" onSubmit={headerSearch}>
                    <input type="text" className="header__search-input" placeholder="Search..." value={searchString} onInput={(e)=>{setSearchString(e.target.value)}} />
                    { searchString.length > 0 && <a href="# " className="header-search-reset-icon" onClick={searchReset}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.3335 7.33334L14.6668 14.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.6668 7.33334L7.3335 14.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a> }
                </form>
                <div className="header__right">
                    <div className="header__right-wallet">
                        <span className="header__right-wallet-icon">
                            <IcoWallet/>
                        </span>
                        <span className="header__right-wallet-total">$12.23</span>
                    </div>
                    <button className="btn btn-primary btn--lg ml-15">
                        <span>Rental Setup</span>
                        <span className="btn-icon">
                            <IcoDownload/>
                        </span>
                    </button>
                    <div className="header__wrap-btns">
                        <div className={`header__btn-wrap ml-15 ${dropSupport ? 'header__btn-wrap--active':''}`} data-dropdown-header="" >
                            <button className="header__btn" data-dropdown-header-btn="" onClick={()=> setDropSupport(!dropSupport)} ref={supportButton}>
                                <IcoQuestion/>
                            </button> 
                            {dropSupport && <DropdownSupport setDropDown={setDropSupport} outBtn={supportButton}/>}    
                        </div>
                        <div className={`header__btn-wrap ml-15 ${dropNotifications ? 'header__btn-wrap--active':""}`} data-dropdown-header="">
                            <button className="header__btn" data-dropdown-header-btn="" onClick={()=>setDropNotifications(!dropNotifications)} ref={notificationsButton}>
                                <IcoBell/>
                            </button>
                            {dropNotifications && <Notifications setDropDown={setDropNotifications} outBtn={notificationsButton}/>}
                        </div>
                        <div className="header__btn-wrap ml-15">
                            <Link className="header__btn header__btn--active" to="/my-account">
                                <IcoAvatar/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header