import React from 'react'

import {ReactComponent as IcoLetter} from '../../assets/img/Letter.svg'
import {ReactComponent as IcoDiscord} from '../../assets/img/ic_outline-discord-2.svg'

const ContactUs = () =>{
    return (
        <section className="section" id="contact">
            <div className="container container-lg">
                <h2 className="section-title mb-12 text-center fw-600">Contact Us</h2>
                <div className="section-subtitle mb-50 text-center">
                    <p>Feel free to contact us with email or on discord</p>
                </div>
                <div className="columns columns-25">
                    <div className="col-6">
                        <div className="contant-us">
                            <div className="contant-us__icon">
                                <IcoLetter/>
                            </div>
                            <div className="contant-us__text">
                                <p>Feel free to send message</p>
                            </div>
                            <a href="" className="btn radius-8 btn--outline btn--md">Contact Us</a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="contant-us">
                            <div className="contant-us__icon">
                                <IcoDiscord/>
                            </div>
                            <div className="contant-us__text">
                                <p>Our discord server</p>
                            </div>
                            <a href="" className="btn radius-8 btn--outline btn--md">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ContactUs
