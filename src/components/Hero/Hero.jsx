// import {useState,useEffect,useRef} from 'react'

import Button from '../CoreComponents/Button'
import img from '../../utils/img_imports'
import MainContainer from 'components/CoreComponents/MainContainer'

const Hero = () =>{


    return(
        <section className="hero">
            <MainContainer>
                <div className='wrapper wrapper__hero'>
                    <div className='hero__content'>
                        <h1 className='title title__hero'>Hello! I’m Denis Malniev!</h1>
                        <h3 className='subtitle '>Frontend (React.js) Developer</h3>
                        <Button className={'btn btn--accent '} text={'Contact me'} type={'button'}/>
                        <Button className={'btn btn__border--accent ml-28'} text={'Download CV'} type={'button'}/>
                    </div>
                    <img className='hero__img' src={img.denisHero} alt="" />
                    <div className='hero_bgr'></div>
                </div>
            </MainContainer>
        </section> 
    )
}

export default Hero