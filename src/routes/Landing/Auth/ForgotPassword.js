import React from "react";
import { Link } from "react-router-dom";


import {ReactComponent as LogoLoginForm} from '../../../assets/img/logo-login-form.svg'
import {ReactComponent as IcoArrow} from '../../../assets/img/icon-arrow.svg'
import {ReactComponent as IcoEmail} from '../../../assets/img/icon-emeil.svg'
import imgLeftDecor from '../../../assets/img/decor-ellipse-left.png'
import imgRightDecor from '../../../assets/img/decor-ellipse-right.png'



 export const ForgotPassword = () => {
     return (
    <div className='landing bg-image'>
         <div className="wrapper ">
             <main className="content">
                 <div className="container container-login">
                     <div className="login">
                         <div className="login__logo mb-30">
                            <LogoLoginForm/>
                         </div>
                         <form method="post" action="#" className="form">
                             <Link to='/login' className="btn mb-15">
								<span className="btn-icon">
									<IcoArrow/>
								</span>
                                 <span>Back</span>
                             </Link>
                             <div className="form-header">
                                 <h2 className="form-title mb-10">Forgot password?</h2>
                                 <p className="form-subtitle mb-30">
                                     Please enter your registered email address.
                                     We’ll send instruction to help reset your password.
                                 </p>
                             </div>
                             <div className="form-body">
                                 <div className="input-wrap icon-left mb-30">
                                     <input className="input" type="email" placeholder="Your email address..." />
                                         <div className="input-icon-left">
											<IcoEmail/>
                                         </div>
                                 </div>

                             </div>
                             <div className="form-footer text-center">
                                 <button type="submit" className="btn radius-8 btn--lg btn--primary w-100">
                                     <span className="info fs-16 lh-22">Send reset instructions</span>
                                 </button>
                             </div>
                         </form>
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
