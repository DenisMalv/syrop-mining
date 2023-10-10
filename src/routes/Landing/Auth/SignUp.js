import React, {useEffect, useRef, useState}from "react";
import { Link,useNavigate } from "react-router-dom";



import {ReactComponent as LogoLoginForm} from '../../../assets/img/logo-login-form.svg'
import {ReactComponent as IcoEmail} from '../../../assets/img/icon-emeil.svg'
import {ReactComponent as IcoPhone} from '../../../assets/img/icon-phone.svg'
import {ReactComponent as IcoKey} from '../../../assets/img/icon-key.svg'
import {ReactComponent as IcoEyeShow} from '../../../assets/img/icon-eye.svg'
import {ReactComponent as IcoEyeHide} from '../../../assets/img/icon-password-eye.svg'
import imgLeftDecor from '../../../assets/img/decor-ellipse-left.png'
import imgRightDecor from '../../../assets/img/decor-ellipse-right.png'

export const SignUp = ({isLogin,setIsLogin}) => {
    const navigate = useNavigate()
    const passOne = useRef(null)
    const passTwo = useRef(null)

    const [data,setData] = useState({email:'',phone:'',pass:'',pass2:''})
    const [pass1,setPass1] = useState(false)
    const [pass2,setPass2] = useState(false)

    return (
    <div className='landing bg-image'>
        <div className="wrapper ">
            <div className="wrapper">
                <main className="content">
                    <div className="container container-login">
                        <div className="login">
                            <div className="login__logo mb-30">
                                <LogoLoginForm/>
                            </div>
                            <form method="post" action="#" className="form mb-30">
                                <div className="form-header">
                                    <h2 className="form-title mb-10">Create your account</h2>
                                    <p className="form-subtitle mb-30">Fill in register form</p>
                                </div>
                                <div className="form-body">
                                    <div className="input-wrap icon-left mb-15">
                                        <input className="input" type="email" placeholder="Your email address..." name='email'
                                               value={data.email} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} />
                                        <div className="input-icon-left">
                                            <IcoEmail/>
                                        </div>
                                    </div>
                                    <div className="input-wrap icon-left mb-15">
                                        <input className="input" type="text" name='phone' placeholder="(704) 555-0127" value={data.phone} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} />
                                        <div className="input-icon-left">
                                           <IcoPhone/>
                                        </div>
                                    </div>
                                    <div className="input-wrap icon-left mb-20">
                                        <input className="input" type="password" name='pass' ref={passOne}
                                        placeholder="************"
                                        value={data.pass} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} />
                                        <div className="input-icon-left">
                                            <IcoKey/>
                                        </div>
                                        <div className="input-icon-right" onClick={()=>{passOne.current.type === 'password' ? passOne.current.type = "text" : passOne.current.type = 'password';setPass1(!pass1)}}>
                                            {!pass1 ? <IcoEyeShow/> : <IcoEyeHide/> } 
                                        </div>
                                    </div>

                                    <div className="input-wrap icon-left mb-20">
                                        <input className="input" type="password" placeholder="Confirm password" name='pass2' ref={passTwo}
                                        value={data.pass2} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} />
                                        <div className="input-icon-left">
                                            <IcoKey/>
                                        </div>
                                        <div className="input-icon-right" onClick={()=>{passTwo.current.type === 'password' ? passTwo.current.type = "text" : passTwo.current.type = 'password';setPass2(!pass2)}}>
                                            {!pass2 ? <IcoEyeShow/> : <IcoEyeHide/> } 
                                        </div>
                                    </div>

                                    <label className="checkbox mb-30">
                                        <input type="checkbox" className="checkbox--input" />
                                        <span className="check mr-20"></span>
                                        <span className="check--text">
                                I agree to <a href="#" className="btn btn-link">Terms &amp; Conditions</a>
                            </span>
                                    </label>
                                </div>
                                <div className="form-footer text-center">
                                    <button type="submit" className="btn radius-8 btn--lg btn--primary w-100"  onClick={()=>{ setIsLogin(true);navigate('/',{replace:true})}}>
                                        <span className="info fs-16 lh-22">Create my account</span>
                                    </button>
                                </div>
                            </form>
                            <div className="group-link">
                    <span>Already have an account? <span>
                    <Link to="/login" className="btn btn-link">Login</Link>
                    </span></span></div>
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
    </div>
    )
}
