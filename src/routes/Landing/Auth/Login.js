import React,{useState,useRef} from "react";
import { Link,useNavigate } from "react-router-dom";

import {ReactComponent as LogoLoginForm} from '../../../assets/img/logo-login-form.svg'
import {ReactComponent as IcoEmail} from '../../../assets/img/icon-emeil.svg'
import {ReactComponent as IcoKey} from '../../../assets/img/icon-key.svg'
import {ReactComponent as IcoEyeShow} from '../../../assets/img/icon-eye.svg'
import {ReactComponent as IcoEyeHide} from '../../../assets/img/icon-password-eye.svg'
import imgLeftDecor from '../../../assets/img/decor-ellipse-left.png'
import imgRightDecor from '../../../assets/img/decor-ellipse-right.png'

export const Login = ({isLogin,setIsLogin}) => {
    const navigate = useNavigate()
    const passOne = useRef(null)
    const [pass1,setPass1] = useState(false)

    return (
    <div className='landing bg-image'>
        <div className="wrapper">
            <main className="content">
                <div className="container container-login">
                    <div className="login">
                        <div className="login__logo mb-30">
                            <LogoLoginForm/>
                        </div>
                        <form method="post" action="#" className="form mb-30">
                            <div className="form-header">
                                <h2 className="form-title mb-10">Login</h2>
                                <p className="form-subtitle mb-30">Login to manage your account</p>
                            </div>
                            <div className="form-body">
                                <div className="input-wrap icon-left mb-15">
                                    <input className="input" type="email" placeholder="Your email address..." />
                                    <div className="input-icon-left">
                                        <IcoEmail/>
                                    </div>
                                </div>
                                <div className="input-wrap icon-left  mb-20">
                                    <input className="input" type="password" placeholder="***********" ref={passOne}/>
                                    <div className="input-icon-left">
                                        <IcoKey/>
                                    </div>
                                    <div className="input-icon-right"  onClick={()=>{passOne.current.type === 'password' ? passOne.current.type = "text" : passOne.current.type = 'password';setPass1(!pass1)}}>
                                        {!pass1 ? <IcoEyeShow/> : <IcoEyeHide/> } 
                                    </div>
                                </div>

                                <label className="checkbox mb-30">
                                    <input type="checkbox" className="checkbox--input" />
                                    <span className="check mr-20"></span>
                                    <span className="check--text">
                                Remember Me
                            </span>
                                </label>
                            </div>
                            <div className="form-footer text-center">
                                <button type="button" className="btn radius-8 btn--lg btn--primary w-100" onClick={()=>{ setIsLogin(true);navigate('/',{replace:true})}}>
                                    <span className="info fs-16 lh-22">Login</span>
                                </button>
                            </div>
                        </form>
                        <div className="group-link mb-5">
                            <span>Don’t have any password?  
                                <span>
                                    <Link to='/sign-up' className="btn btn-link"> Sign Up</Link>
                                </span>
                            </span>
                        </div>
                        <Link to="/forgot-password" className="btn btn-link">Forgot Password?</Link>
                    </div>
                </div>
            </main>
            <div className="decor" style={{position: "fixed", bottom: 0, left: 0}}>
                 <img src={imgLeftDecor}  alt='decor'/>
             </div>
             <div className="decor" style={{position: "fixed", bottom: 0, right: 0}}>
                 <img src={imgRightDecor} alt='decor'/>
             </div>
             <div className="noise-bg-wrapper">
                 <div className="noise-bg"></div>
             </div>
        </div>
    </div>
    )
}
