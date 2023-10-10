import React,{useState,useEffect, useRef} from 'react'
import {Link,NavLink} from "react-router-dom";

import { useClickOutside } from '../../helpers/useClickOutside';

import {ReactComponent as IcoWallet} from '../../assets/img/wallet-coins.svg'
import {ReactComponent as IcoSupport} from '../../assets/img/message-question-checkmark.svg'
import {ReactComponent as IcoNotifications} from '../../assets/img/bell-notifications.svg'
import {ReactComponent as IcoUser} from '../../assets/img/single-user.svg'

const SignedInMenu = ({setIsLogin}) =>{



    return (

                    <div class="header__buttons spase-nowrap">
                        <a href="#" class="btn btn--md walet-btn">
                            <span class="btn-icon">
                                <IcoWallet/>
                            </span> 
                            <span>$12.23</span>
                        </a>
                        <Link to='/marketplace' class="btn radius-8 btn--md btn--primary mobile-hidden">Dashboard</Link>
                        <a href="#" class="btn btn--xs mobile-hidden">
                            <span class="btn-icon">
                                <IcoSupport/>
                            </span>
                        </a>
                        <a href="#" class="btn btn--xs mobile-hidden">
                            <span class="btn-icon">
                                <IcoNotifications/>
                            </span>
                        </a>
                        <a href="#" class="btn btn--xs " onClick={()=>setIsLogin(false)}>
                            <span class="btn-icon">
                                <IcoUser/>
                            </span>
                        </a>
                    </div>
    )
}

export default SignedInMenu